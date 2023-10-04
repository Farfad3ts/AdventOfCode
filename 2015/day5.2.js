const fs = require('fs');
let result = fs.readFileSync("day5.txt", 'utf-8').split('\r\n');
let niceStringCount = 0;

const reg = new RegExp(/^(?!.*(?:ab|cd|pq|xy))(?=([aeiou].*){3,})(?=.*((.)\3))/);
for(let i = 0; i < result.length; i++){
    let regexIsTrue = reg.test(result[i])
    if(regexIsTrue == true)
        niceStringCount++
}

console.log(niceStringCount)
