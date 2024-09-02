let str = "Hey i am Sarfaraz Mujawar";
let longest = (str)=>{
    let word = '';
    let arr = str.split(' ');
    for(w of arr)
    {
        if(word.length < w.length)
        {
            word = w;
        }
    }
    return word;
}
console.log(longest(str))