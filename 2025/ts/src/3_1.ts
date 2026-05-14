import * as fs from 'fs';

const input = fs.readFileSync("../input/3.txt", "utf8").split("\r\n");
let result = 0
for(let i = 0; i < input.length; i++){
    let a, lastNumber = 0
    for(let j = 0; j < input[i].length - 1; j++){
        a = input[i][j];
        let number = 0;
        for(let k = j + 1; k < input[i].length; k++){
            let b = input[i][k];
            console.log(`a : ${a}\nb : ${b}\na + b : ${number = Number(a+b)}`);
            if(number > lastNumber){
                lastNumber = number;
            }
        }
    }
    console.log(lastNumber)
    result += lastNumber;
}

console.log(result)