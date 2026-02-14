import * as fs from 'fs';

const input = fs.readFileSync("../input/1.txt", "utf8").split("\r\n");
let counter = 50;
let result = 0;
for(let i = 0; i < input.length; i++) {
    let direction = input[i][0];
    let force = parseInt(input[i].substring(1));
    force %= 100;
    if (direction == 'L') {
        counter -= force;
    }
    else if (direction == 'R') {
        counter += force;
    }
    else {
        continue;
    }
    counter %= 100;
    if (counter < 0){
        counter += 100;
    }
    if (counter == 0){
        result++;
    }
    console.log(counter);
}
console.log(result);