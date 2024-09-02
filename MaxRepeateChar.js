let str = 'Sarfaraz';
let obj ={};
let maxCount = 0;
let maxChar ='';

for(let i=0;i<str.length;i++)
{
    let char = str.charAt(i);
    obj[char] = (obj[char] ||0)+1;
    
}
for(key in obj)
{
    if(obj[key]>maxCount)
    {
        maxCount = obj[key];
        maxChar = key;
    }
   
}
console.log(maxCount, maxChar);
