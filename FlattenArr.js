let arr = [[1, 2], [3, [4, 5]]];

const flten1=(arr)=>{
    let res = arr.flat(Infinity);
    // but if we have deep nested element we need to use (Infinity)
    //or else we will get op as [ 1, 2, 3, [ 4, 5 ] ]
    return res;
}
const flaten2 = (arr)=>{
    //this approach will not work for deeply nested
    let res = arr.reduce((acc,val)=>{
       return acc.concat(val)

    },[])
    return res
}
const flaten3 = (arr)=>{
    
    let res = arr.reduce((acc,val)=>{
       return acc.concat(Array.isArray(val)?flaten3(val):val);

    },[])
    return res
}
console.log(flten1(arr));
console.log(flaten2(arr));
console.log(flaten3(arr));
