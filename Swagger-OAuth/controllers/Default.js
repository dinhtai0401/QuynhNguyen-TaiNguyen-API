'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
