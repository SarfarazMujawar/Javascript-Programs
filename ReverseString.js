//Code 5:String reverse with reversing of individual words
let str = "Hey I am Sarfaraz Mujawar";
let result = str.split('').reverse().join('');
console.log(result)
//2nd approach
function revString(str){
    let rev ='';
    for(let c of str)
    {
        rev = c+rev;
    }
    return rev;
}
console.log(revString(str))
