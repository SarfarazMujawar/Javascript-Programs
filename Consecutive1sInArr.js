//find max count of consecutive 1's in array in js

let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
const cons1s = (arr)=>{
    let max = 0;
    let currentMax = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===1)
        {
            currentMax++;
            if(max<currentMax)
                max=currentMax;
        }
        else
        currentMax=0;
    }
    return max;
}
console.log(cons1s(arr));
