import * as fs from "fs";

const input = fs
    .readFileSync("../input/4.txt", "utf-8")
    .trim()
    .split(/\r?\n/)
    .map(x => x.replaceAll('.', '0').replaceAll('@', '1').split('').map(Number));
let goodFlask = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] !== 1) {
            continue
        };
        const neighbors = [
            input[i - 1]?.[j - 1], input[i - 1]?.[j], input[i - 1]?.[j + 1], input[i]?.[j - 1], input[i]?.[j + 1],
            input[i + 1]?.[j - 1], input[i + 1]?.[j], input[i + 1]?.[j + 1]
        ];
        const adjacentFlasks = neighbors.filter(n => n === 1).length;
        if (adjacentFlasks < 4) {
            goodFlask++;
        }
    }
}

console.table(input);
console.log("Good flasks:", goodFlask);