const curryF = (a) =>{
    return (b)=>{
        return (c) =>{
            console.log(a+b+c)
        }
    }
}

console.log(curryF(1));