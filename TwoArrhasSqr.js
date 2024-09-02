/*create a function which accepts two arrays arr1 and arr2. 
the function should return true if every value in arr1 has 
its corresponding value squared in arr2. 
The frequency of values must be same*/
let arr1 = [1, 2, 3, 2];
let arr2 = [1, 4, 9, 4];

const checkFreq = (arr1,arr2) =>{
    if(arr1.length !== arr2.length)
        return false;
    let freqCounter1 = {};
    let freqCounter2 = {};
    for(val of arr1)
    {
        freqCounter1[val] = (freqCounter1[val] || 0)+1;
    }
    console.log(freqCounter1);
    for(val of arr2)
        {
            freqCounter2[val] = (freqCounter2[val] || 0)+1;
        }
    console.log(freqCounter2);

    for(key in freqCounter1)
    {
        console.log(key);
        // we check if square of key is present in freqCounter2
        if(!(key*key in freqCounter2))
            return false;
        // we check frequencyies
        if(freqCounter1[key]!==freqCounter2[key*key])
            return false;
        
    }
    return true;
    
}
console.log(checkFreq(arr1,arr2));
