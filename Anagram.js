let a = 'Army';
let b = 'mary';

let str1 = a.toLowerCase().split('').sort().join('');
let str2 = b.toLowerCase().split('').sort().join('');
let result = str1===str2?true:false;
console.log(result)