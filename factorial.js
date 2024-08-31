// Find factorial of user input number
// const ip = parseInt(prompt("Enter positive Number :"))
let ip = 5;
if(ip<0){
    console.log("Enter a positive integer");
}
else if(ip==0){
    console.log('factorial is 1');
}
let fact = 1;
while (ip>0){
    fact = fact*ip;
    ip--;
}
console.log(fact)