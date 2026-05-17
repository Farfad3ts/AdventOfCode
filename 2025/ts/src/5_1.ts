import * as fs from "fs";

const input = fs
    .readFileSync("../input/5.txt", "utf8")
    .trim()
    .split(/\r?\n\r?\n/)
    .map((part, i) =>
        part
            .split(/\r?\n/)
            .map((line) => (i === 0 ? line.split("-").map(Number) : Number(line))),
    ) as [number[][], number[]];

input[0] = input[0]
    .sort((a, b) => a[0] - b[0])
    .reduce<number[][]>((acc, [start, end]) => {
        if (!acc.length || start > acc[acc.length - 1][1] + 1) {
            acc.push([start, end]);
        } else {
            acc[acc.length - 1][1] = Math.max(acc[acc.length - 1][1], end);
        }
        return acc;
    }, []);
input[1] = input[1].sort();
let result = 0;

for (let i = 0; i < input[1].length; i++) {
    let robotID = input[1][i];
    for (let j = 0; j < input[0].length; j++) {
        if (robotID < input[0][j][1] && robotID > input[0][j][0]) {
            result++;
            continue;
        }
    }
}
console.log(result)