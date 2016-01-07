var numbers = process.argv

numbers.splice(0,2);

var total = numbers.reduce(function(a,b){
  return parseInt(a,10) + parseInt(b,10);
});

console.log(total);