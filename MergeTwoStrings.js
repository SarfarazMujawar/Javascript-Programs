// // hello world1234 o/p - hweollod1234

// let str1 = 'hello12345';
// let str2 = 'world';

// let min = str1.length >str2.length?str2:str1;
// let max = str1.length >str2.length?str1:str2;
// let result = '';
// let m;
// for(let i=0;i<min.length;i++)
// {
//     result = result+str1.charAt(i);
//     result = result+str2.charAt(i);
//     m=i;
// }
// for(let j=m+1;j<max.length;j++)
// {
//     result = result+max.charAt(j);

// }
// console.log(result);

//2nd Approach
let str1 = 'hello12345';
let str2 = 'world';

// Determine the shorter and longer strings
let minLength = Math.min(str1.length, str2.length);
let maxLength = Math.max(str1.length, str2.length);
let result = '';

// Append alternating characters from both strings
for (let i = 0; i < minLength; i++) {
    result += str1[i] + str2[i];
}

// Append the remaining characters from the longer string
result += str1.slice(minLength) + str2.slice(minLength);

console.log(result); // Output: hweollod1234

