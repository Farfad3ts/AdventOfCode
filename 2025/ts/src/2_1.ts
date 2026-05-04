import * as fs from 'fs';

const input = fs.readFileSync("../input/2.txt", "utf8").split(',').map(x => x.split('-')).map(x => x.map(Number))
let result = 0;
for (let range of input) {
    for (let i = range[0]; i <= range[1]; i++) {
        if (`${i}`.match(/^(\d+)\1$/)) {
            result += i;
        }
    }
}
console.log(result)