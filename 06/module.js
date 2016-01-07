var fs = require('fs'),
    path = require('path');

module.exports = function(dir, fileExt, callback){
  return fs.readdir(dir, function(err, files){

    if(err){
      return callback(err);
    }

    var filtered = files.filter(function(el){
      return path.extname(el).split('.')[1] === fileExt;
    });

    callback(null, filtered);
  });
}