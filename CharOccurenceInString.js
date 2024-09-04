const charOcc = (str,char)=>{
    let count =0;
    for(let i=0;i<str.length;i++)
    {
        if(str.toLowerCase().charAt(i)===char.toLowerCase())
        {
            count++;
        }
    }
    return count;
}
let str = "Sarfaraz";
console.log(charOcc(str,'a'));
