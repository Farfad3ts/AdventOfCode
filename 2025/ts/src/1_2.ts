import * as fs from 'fs';

function hits_to_zero(p : number, dir : string, d: number): number {
    let first;
    if (dir == 'R') {
        first = (100 - (p % 100)) % 100;
        if (first == 0) {
            first = 100;
        }
    } else {
        first = p % 100;
        if (first == 0){
            first = 100;
        }
    }
    if (d < first){
        return 0;
    }
    return 1 + Math.floor((d - first) / 100);
}

const input = fs.readFileSync("../input/1.txt", "utf8").split("\r\n");
let counter = 50;
let result = 0;

for(let i = 0; i < input.length; i++) {
    if (input[i].length == 0) {
        continue;
    }
    let direction = input[i][0];
    let force = parseInt(input[i].substring(1));
    result += hits_to_zero(counter, direction, force);
    if (direction == 'L') {
        counter = (counter - (force % 100)) % 100;
        if (counter < 0){
            counter += 100;
        }
    }
    else if (direction == 'R') {
        counter = (counter + (force % 100)) % 100;
    }
}
console.log(result);