'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.getPostInAllPosts = function getPostInAllPosts (req, res, next) {
  Default.getPostInAllPosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postCategoryGET = function postCategoryGET (req, res, next) {
  var category = req.swagger.params['category'].value;
  Default.postCategoryGET(category)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDateOfPostingGET = function postDateOfPostingGET (req, res, next) {
  var dateOfPosting = req.swagger.params['dateOfPosting'].value;
  Default.postDateOfPostingGET(dateOfPosting)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdDELETE = function postIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.postIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdGET = function postIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.postIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postIdPUT = function postIdPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  var id = req.swagger.params['id'].value;
  Default.postIdPUT(body,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postLocationGET = function postLocationGET (req, res, next) {
  var location = req.swagger.params['location'].value;
  Default.postLocationGET(location)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postPOST = function postPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.postPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
