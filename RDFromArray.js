// /Code 2: Remove Duplicate characters from array 
//of element and find the count of an elements using set object
let arr = [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];
const removeD = (arr)=>{
    const set = new Set(arr);
    return Array.from(set);
}
console.log(removeD(arr));
//here new Set creates a set which stores only unique valu
// we pass array as ip
//then we are converting set into array
//2nd approach
const removeD2 = (arr)=>{
    const mySet = new Set(arr);
    return [...mySet]
}
console.log(removeD2(arr))
//3rd approach
//we can also use filter
const usingFilter =(arr)=>{
    let Duplicate = arr.filter((item,index,arr)=>{
        return arr.indexOf(item)==index;
    });
}
console.log(usingFilter(arr))