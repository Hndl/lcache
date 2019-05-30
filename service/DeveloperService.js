'use strict';
var db = require('../db/db');

/**
 * remove the object from the specified cache
 * remove the item from the specified cache. 
 *
 * cachename String the name of the cache to scan
 * key String the key to search for
 * no response value expected for this operation
 **/
exports.del = function(cachename,key) {
  return new Promise(function(resolve, reject) {
    console.log(`deleting ${key}@${cachename} - init`);
    resolve();
    
  });
}


/**
 * searches cache using key and retrieve related value/object
 * Search cache for key and retreive payload 
 *
 * cachename String the name of the cache to scan
 * key String the key to search for
 * returns String
 **/
exports.fetch = function(cachename,key) {
  return new Promise(function(resolve, reject) {
    console.log(`${key}@${cachename} - get`);
    var examples = {};
    if (Object.keys(examples).length > 0) {
      
      console.log(`${key}@${cachename} - retrieve value: init`);
      
      db.get(key, function(err, value) {  
        if (err) {
          console.log(`${key}@${cachename} - error[${err}]`);
        } else {
          examples.push(value);
          console.log(`${key}@${cachename} - retrieve value: found`);
        }
        resolve(examples[Object.keys(examples)[0]]);
      });
      //resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds an cache item
 * Adds an item to the cache
 *
 * cachename String the name of the cache to scan
 * key String the key to search for
 * cacheItem String Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.set = function(cachename,key,cacheItem) {
  return new Promise(function(resolve, reject) {
    console.log(`SET ${key}@${cachename} - storing value: init`);
    db.put(key, cacheItem); 
    console.log(`SET ${key}@${cachename} - storing value: done`);
    resolve();
  });
}

