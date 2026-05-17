import * as fs from "fs";

const input = fs
    .readFileSync("../input/4.txt", "utf-8")
    .trim()
    .split(/\r?\n/)
    .map(x => x.replaceAll('.', '0').replaceAll('@', '1').split('').map(Number));
let accessibleRolls = 0;
let rollOfPaperRemoved = true;

while (rollOfPaperRemoved){
    let acc = accessibleRolls;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] !== 1) {
                continue;
            }
            const neighbors = [
                input[i - 1]?.[j - 1], input[i - 1]?.[j], input[i - 1]?.[j + 1], input[i]?.[j - 1], input[i]?.[j + 1],
                input[i + 1]?.[j - 1], input[i + 1]?.[j], input[i + 1]?.[j + 1]
            ];
            const adjacentRolls = neighbors.filter(n => n === 1).length;
            if (adjacentRolls < 4) {
                accessibleRolls++;
                input[i][j] = 0;
            }
        }
    }
    if (acc == accessibleRolls){
        rollOfPaperRemoved = false
    }
}

console.log(accessibleRolls)