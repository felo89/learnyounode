var fs = require('fs');
var path = require('path');
var buf = fs.readdir(process.argv[2], function(err, files){
  var filtered = files.filter(function(el){
    return path.extname(el).split('.')[1] === process.argv[3];
  });

  for (var i = 0; i < filtered.length; i++) {
    console.log(filtered[i]);
  };
});