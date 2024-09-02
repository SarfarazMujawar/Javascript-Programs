let str = "bob";
let rev = str.toLowerCase().split('').reverse().join('');
let result = str.toLowerCase()===rev?true:false;
console.log(result)