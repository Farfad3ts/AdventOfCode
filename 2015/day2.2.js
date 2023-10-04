let path = 'day2.txt';

let result = require("fs").readFileSync(path, "utf8").split("\r\n").map(v => v.split("x"))

let acc = 0

for(let line of result){
    line.sort((a, b) => a-b)
    let ribbonlength = line[0] * line[1] * line[2];
    let min = Math.min(... line)
    let bowLength = min * 2 + line[1] * 2;
    acc += bowLength;
    acc += ribbonlength
    console.log(acc)
}