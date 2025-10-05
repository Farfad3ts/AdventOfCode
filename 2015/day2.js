import * as fs from "fs"

let input = fs.readFileSync("input/day2.txt", "utf8").split("\r\n").map(v => v.split("x"))

function part1(){
    let result = 0
    for (let line of input) {
        let length = line[0] * line[1];
        let width = line[1] * line[2];
        let heigth = line[2] * line[0];
        const min = Math.min(length, width, heigth)
        let wrapOrder = (2 * length + 2 * width + 2 * heigth + min);
        result += wrapOrder;
    }
    return result
}

function part2() {
    let result = 0
    for(let line of input){
        line.sort((a, b) => a-b)
        let ribbonlength = line[0] * line[1] * line[2];
        let min = Math.min(... line)
        let bowLength = min * 2 + line[1] * 2;
        result += bowLength;
        result += ribbonlength
    }
    return result;
}

console.log(part1());
console.log(part2());