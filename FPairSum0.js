//To find a first pair whose sum is zero

/*const firstPair=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]===0)
            {
                return [arr[i],arr[j]]
            }
        }
    }
}

let arr = [-5,-4,-3,-2,-1,0,1,2,3,4,5];
console.log(arr);*/
function getSumPairZero(array)
{
  for(let j=0; j<array.length;j++)
  {
     for(let i=1; i<array.length; i++)
     {
         if(array[j]+array[i]===0)
         {
            return [array[j], array[i]]
         }
     }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)
