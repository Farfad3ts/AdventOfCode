const fs = require("fs");

const result = fs.readFileSync("day1.txt", "utf-8").split("\r\n").map( v => {
    let words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i in words)
        v = v.replaceAll(words[i], `${words[i]}${Number(i)+1}${words[i]}`);
    let digits = v.match(/\d/g );
    if(digits.length > 0)
        return digits[0] + digits[digits.length - 1];
}).map(Number).reduce((a, b) => a + b, 0);
console.log(result)