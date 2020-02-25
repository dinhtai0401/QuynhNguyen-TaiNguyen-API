'use strict';


/**
 * Get current post in all posts
 *
 * returns List
 **/
exports.getPostInAllPosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
}, {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get post in a single post
 *
 * category String Unique id for a post
 * returns ProductInfo
 **/
exports.postCategoryGET = function(category) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get post in a single post
 *
 * dateOfPosting String Unique id for a post
 * returns ProductInfo
 **/
exports.postDateOfPostingGET = function(dateOfPosting) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a single post
 *
 * id List Unique id for a post
 * no response value expected for this operation
 **/
exports.postIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get post in a single post
 *
 * id String Unique id for a post
 * returns ProductInfo
 **/
exports.postIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change current weather in a single city
 *
 * body List 
 * id String Unique id for a post
 * no response value expected for this operation
 **/
exports.postIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get post in a single post
 *
 * location String Unique id for a post
 * returns ProductInfo
 **/
exports.postLocationGET = function(location) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "0025-08-12T00:00:00.000+0000",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post a new post
 * Lets a user post a new post
 *
 * body List 
 * no response value expected for this operation
 **/
exports.postPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

