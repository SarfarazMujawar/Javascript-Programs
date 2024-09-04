let str = "Sarfaraz AEIOU";

const countV = (str)=>{
    let vowels = ['a','e','i','o','u'];
    let count =0;
    for(char of str.toLowerCase())
    {
        if(vowels.includes(char))
        {
            count++;
            console.log(char);
            
        }
        
    }
console.log(count);

}
console.log(countV(str))