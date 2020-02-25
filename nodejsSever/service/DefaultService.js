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
  "dateOfPosting" : "2000-01-23",
  "title" : "lamborghini aventador for selling",
  "catergory" : "car"
}, {
  "nameAndNumber" : "Anna - 0417155512",
  "images" : [ "image1", "image2", "image3" ],
  "price" : 200,
  "deliveryType" : "shipping",
  "location" : "Oulu",
  "id" : 1,
  "dateOfPosting" : "2000-01-23",
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
  "dateOfPosting" : "2000-01-23",
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
 * Post a new weather
 * Lets a user post a new weather
 *
 * body List 
 * no response value expected for this operation
 **/
exports.postPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

