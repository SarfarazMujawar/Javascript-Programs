//Fibonacci Series (0,1,1,2,3,5,8,13....)

let num = 5;
const fibb = (num)=>{
    let arr = [0,1];
    for(let i=1;i<=num;i++)
    {
        arr.push(arr[i]+arr[i-1]);
    }
    return arr
}
console.log(fibb(num));
