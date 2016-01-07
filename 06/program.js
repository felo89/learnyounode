var module = require('./module'),
    dir = process.argv[2],
    fileExt = process.argv[3];

module(dir, fileExt, function(err, data){
  data.forEach(function(file){
    console.log(file);
  });
});