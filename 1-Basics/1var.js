var a = 2;
let x = 4;

if (Math.random() > 0.5) {
  const y = 5;
}
//console.log(y); // ReferenceError: y is not defined

if (true) {
  var y = 5;
}
console.log(y); // x is 5
