//Remove Duplicate characters from String
let String = 'priya riya supriya';
let result = String.split('').filter((item,index,arr)=>{
    console.log( arr.indexOf(item))
    console.log(index)

    return arr.indexOf(item)==index;

}).join('');
console.log(result)
// split method converts string into char []
//in filter it checks first occurence of the element = current index of element
// join is used to convert array to string

//
//we have another approach for this program using reduce
let result2 = String.split('').reduce((acc,char)=>{
    if(!acc.includes(char))
    {
        acc.push(char);
    }
    return acc;
},[]);
console.log(result2.join(''))


