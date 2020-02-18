const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection: {
        type: Array
    }
})

const Post = mongoose.model('post', userSchema);

module.exports = Post;