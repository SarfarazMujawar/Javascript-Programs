let str = "bob";
let rev = str.toLowerCase().split('').reverse().join('');
let result = str.toLowerCase()===rev?true:false;
console.log(result)

let rev1 = ""
for(char of str)
{
   rev1 = char+rev1;
    
}
console.log(rev1.toLowerCase()===str.toLowerCase()?true:false);
