var fs = require('fs');
var buf = fs.readFile(process.argv[2], function(error, data){
  var str = data.toString();
  console.log(str.split('\n').length - 1);
});