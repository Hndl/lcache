'use strict';


/**
 * remove the object from the specified cache
 * remove the item from the specified cache. 
 *
 * cachename String the name of the cache to scan
 * key Integer the key to search for
 * no response value expected for this operation
 **/
exports.del = function(cachename,key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * searches cache using key and retrieve related value/object
 * Search cache for key and retreive payload 
 *
 * cachename String the name of the cache to scan
 * key Integer the key to search for
 * returns Object
 **/
exports.get = function(cachename,key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
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
 * cacheItem CachePut Inventory item to add (optional)
 * returns Object
 **/
exports.put = function(cachename,cacheItem) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

