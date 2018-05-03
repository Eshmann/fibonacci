a = prompt(" Enter the number: ");
fib1 = 0;
fib2 = 1;

document.write("<center><h1>"+'Fibonacci numbers <br>');
document.write("******************************<br>")
document.write(fib1 + '<br>');
document.write(fib2 + '<br>');

for(i=2; i<=a; i++)
{
    fib3 = fib1 + fib2;
    document.write(fib3)
    fib1 = fib2
    fib2 = fib3
    document.write('<br>');
}
document.write("******************************<br></h1></center>");
