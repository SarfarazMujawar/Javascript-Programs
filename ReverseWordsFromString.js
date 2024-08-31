//String reverse without reversing of individual words 
let string = "India is my country";
const reverseWord = (s) => {
    let result = '';
    let word = '';//aidni
    for (let c of string) {
        if (c === ' ') {
            result += word + c;
            word = '';
        }
        word = c + word;
    }
    return result + word
}


console.log(reverseWord(string))

