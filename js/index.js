alert("This is a true magic");
var a = Number(prompt("please enter any number you want to know in Fibonacci sequence"));

if (a === 0){
    document.write('in classic Fibonacci sequence we do not have 0. please start with 1');
}
else {
    var result = Fibonacci(a);
    document.write(result);
}


function Fibonacci(a){
  if (a === 1){
  return 1;
  }
    if (a === 2){
  return 1;
    }
    return Fibonacci(a-1)+Fibonacci(a-2);

}


// function Fibonacci(a) {
//     var x, x1, x2;
//     for (i = 1; i <= a; i++) {
//         x = x1 + x2 || 1;
//         x1 = x2;
//         x2 = x;
//     }
//     return x;
// }
