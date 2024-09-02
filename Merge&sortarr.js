let arr = [1,5,4,9];
let arr2 = [2,1,5,8,6,7];
let mergerArr = arr.concat(arr2)
let sortedArr = mergerArr.sort();
console.log(sortedArr);
// we can also sort in descending order
let descSort = mergerArr.sort((a,b)=>{
    
   return b-a;
    
})
console.log(descSort);

