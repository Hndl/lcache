'use strict';

var utils = require('../utils/writer.js');
var Developer = require('../service/DeveloperService');

module.exports.del = function del (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var key = req.swagger.params['key'].value;
  Developer.del(cachename,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.fetch = function fetch (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var key = req.swagger.params['key'].value;
  Developer.fetch(cachename,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.set = function set (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var key = req.swagger.params['key'].value;
  var cacheItem = req.swagger.params['CacheItem'].value;
  Developer.set(cachename,key,cacheItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
