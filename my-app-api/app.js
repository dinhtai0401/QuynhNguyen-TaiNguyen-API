const express = require("express");
const port = 4000;
const bodyParse = require("body-parser");
const passport = require("passport");
const app = express();
const BasicStrategy = require("passport-http").BasicStrategy
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtSecretKey = require('./jwt-key.json');
const multer  = require('multer');
const has = require('has-value');
const uuidv4 = require('uuid/v4');
const users = require('./services/users');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('./services/user-services');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./key');
const cookieParser = require("cookie-parser");
const Post = require('./services/post-services')
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(bodyParse.json());
app.use(
    cookieSession({
      name: "session",
      keys: [keys.session.cookieKey ],
      maxAge: 24 * 60 * 60 * 100
    })
  );

mongoose.connect(keys.mongodb.dbURL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongodb')
});

app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true // allow session cookie from browser to pass through
    })
  );
  


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// authenticate with BasicStrategy and Token and Google
// --------------------------------------------------------------------------------------
const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

options.secretOrKey = jwtSecretKey.secret;

passport.use(new BasicStrategy(
    (username, password, done) => {
        const user = users.getUserByName(username);
        if ( user == undefined){
            console.log("HTTP Basic username not found");
            return done(null, false, { message: "HTTP Basic username not found" });
        }
       
            if( user.password != password ){
                console.log("HTTP Basic password not matching username");
                return done(null, false, { message: "HTTP Basic password not found" });
            }
            return done(null, user);
    }
));

passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    console.log(jwt_payload);
    const date = Date.now() / 1000
    if(jwt_payload.exp > date){
        done(null, jwt_payload.user);
    }else{
        done(null, false);
    }
}
));


app.get('/users/signin', passport.authenticate('jwt', { session: false }), (req,res) =>{
    res.json(req.user.id);
  }
);

app.get('/users/:id', passport.authenticate('basic', { session: false}), (req,res) => {
    if(req.user.email !== undefined){
        const body = {
            id : req.user.id,
            email: req.user.email,
        };
        const payLoad = {
            user : body
        };
    
        const options = {
            expiresIn: '10s'
        };

        const token = jwt.sign(payLoad, jwtSecretKey.secret, options);
        return res.json({token});
       
    }else{
        res.sendStatus(400);
    }

});

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user.id);
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  },
   (accessToken, refreshToken, profile, done) => {
    // check if user already exists in our db
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
            // already have the user
            //console.log('user is:', currentUser);
            done(null, currentUser);
        }else{
            // if not have in mongodb
            new User({
                username: profile.displayName,
                googleId: profile.id
            }).save().then((newUser) => {
                //console.log('new user created:' + newUser);
                done(null, newUser);
            });
        }
    })
}));

app.get("/auth/login/success",  (req, res) => {
    
    if (req.user) {
      res.json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
      });
    }
  });
  
  app.get("/auth/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  }); 


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] 
}));

app.get('/auth/google/redirect', passport.authenticate('google') ,(req,res) =>{
    res.redirect("http://localhost:3000");
    console.log(req.user.username)
});




// Middleware 

const authCheck = (req, res, next) => {
    console.log(req.user)
    if(!req.user){
        console.log('Not user')
    } 
    next();
}

//----------------------------------------  

app.get('/auth/logout', (req,res) => {
    req.logout();
    res.redirect("http://localhost:3000");
}); 

//------------------------------------------------------------------------------------------------

//  Infortion of customers and some function (post/get/put/delete)

var post = {
    posts: [{
        "id" : 1,
        "idUser": "admin",
        "title" : "Car for new",
        "description": "Still new",
        "category": "Car",
        "location": "Oulu",
        "image": [
            "http://localhost:4000/uploads/1d15d8ee-89be-45ad-b946-4cd26c06ce61-download-(1).jpeg",
            "http://localhost:4000/uploads/41c72e7e-0743-425b-ac69-03802c7f3f43-download-(2).jpeg",
            "http://localhost:4000/uploads/0544fb27-4979-430c-8bd0-af1da840ff07-download.jpeg"
        ],
        "price": "400",
        "dataOfPosting": "01/02/2020",
        "delivery" : "Shipping",
        "SellerOfName": "Anna - 01241325"
    },
    {
        "id" : 2,
        "idUser": "admin",
        "title" : "Clothing for new",
        "description": "6 months",
        "category": "Clothing",
        "location": "Helsinki",
        "image": [
            "http://localhost:4000/uploads/1d15d8ee-89be-45ad-b946-4cd26c06ce61-download-(1).jpeg",
            "http://localhost:4000/uploads/41c72e7e-0743-425b-ac69-03802c7f3f43-download-(2).jpeg",
            "http://localhost:4000/uploads/0544fb27-4979-430c-8bd0-af1da840ff07-download.jpeg"
        ],
        "price": "200",
        "dataOfPosting": "02/02/2020",
        "delivery" : "Pickup",
        "SellerOfName": "Henkoi - 012413251"
    }]
}

// Get all data

app.get('/post', (req, res) => { 
        res.json(post.posts)
});


// Get id of single data

app.get('/post/:id', (req, res) => {
    const resultPost = post.posts.filter(d => {
        if (d.idUser == req.params.id) {
            return true;
        }
        else {
            return false;
        }
    });
    if(resultPost === undefined)
    {
        res.sendStatus(404)
    }
    else
    {
        res.json(resultPost);
    }
})







// Post the single data

const DIR = './uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


app.post('/post', upload.array('imgCollection', 4), (req, res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/uploads/' + req.files[i].filename)
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    const newPost = {
        id: post.posts.length + 1,
        idUser: req.body.idUser,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        image: reqFiles,
        price: req.body.price,
        dataOfPosting: today,
        delivery: req.body.delivery,
        SellerOfName: req.body.SellerOfName,
    };
    post.posts.push(newPost);
    res.status(201);
    res.json(newPost)

})

// Delete the single data


app.delete('/post/:id', (req, res) => {
    post.posts = post.posts.filter(post => post.id != req.params.id);
    res.sendStatus(200);
});



// Change the info of the single data


app.put('/post/:id', upload.array('imgCollection', 4), (req, res) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/uploads/' + req.files[i].filename)
    }
    post.posts = post.posts.filter(post => post.id != req.params.id);
    const newPost = {
        id: req.params.id,
        idUser: req.body.idUser,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        image: reqFiles,
        price: req.body.price,
        dataOfPosting: req.body.dataOfPosting,
        delivery: req.body.delivery,
        SellerOfName: req.body.SellerOfName,
    }
    post.posts.push(newPost);

    res.status(200);
    res.json(newPost); 
})

//----------------------------------------------------------------------------------------------------------



app.listen(port, () => console.log(`Example app listening on port ${port}!`))