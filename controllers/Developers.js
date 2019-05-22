'use strict';

var utils = require('../utils/writer.js');
var Developers = require('../service/DevelopersService');

module.exports.del = function del (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var key = req.swagger.params['key'].value;
  Developers.del(cachename,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get = function get (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var key = req.swagger.params['key'].value;
  Developers.get(cachename,key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.put = function put (req, res, next) {
  var cachename = req.swagger.params['cachename'].value;
  var cacheItem = req.swagger.params['CacheItem'].value;
  Developers.put(cachename,cacheItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
