let a = +prompt(" Enter the number: ");
let fib1 = 1;
let fib2 = 1;
let fib3;
function fibonacci(a){
    
document.write("<center><h1>"+'Fibonacci numbers <br>');
document.write("******************************<br>");
// document.write(fib1 + '<br>');
// document.write(fib2 + '<br>');

for(let i=3; i<=a; i++){

    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    // document.write('<br>');
}
return fib2;

}
document.write(fibonacci(a) + "<br>");
document.write("******************************<br></h1></center>");

function fibonacci2(a){

    if(a <= 1){
      return a;
    } 
    else {
      return fibonacci2(a - 1) + fibonacci2(a - 2);        
    }
}
document.write(`recurcia method : ` + fibonacci2(a));