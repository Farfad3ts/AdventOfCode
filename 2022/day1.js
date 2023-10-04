let result = require('fs').readFileSync("day1.txt", 'utf-8').split('\r\n')
let addedNumber = [];
let int = 0;

for(let i = 0; i < result.length; i++){
    if (result[i] != ""){
        result[i] = parseInt(result[i])
        int += result[i]
    }
    else if (result[i] == ""){
        addedNumber.push(int)
        int = 0
    }
}

addedNumber.sort((a , b) => b - a)

console.log(addedNumber [0])
console.log(addedNumber[0] + addedNumber[1] + addedNumber[2])