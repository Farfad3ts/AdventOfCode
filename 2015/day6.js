import * as fs from "fs";

const lines = fs.readFileSync("input/day6.txt", "utf-8").trim().split(/\r?\n/);

function part1(){
    const grid = Array.from({ length: 1000 }, () => Array(1000).fill(0));
    for (let line of lines) {
        const match = line.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
        if (!match) continue;
        const [, op, x1s, y1s, x2s, y2s] = match;
        const x1 = Number(x1s), y1 = Number(y1s), x2 = Number(x2s), y2 = Number(y2s);
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                if (op === "turn on") 
                    grid[x][y] = 1;
                else if (op === "turn off")
                    grid[x][y] = 0;
                else 
                    grid[x][y] = grid[x][y] ^ 1;
            }
        }
    }
    let acc = 0;
    for (let x = 0; x < 1000; x++)
        for (let y = 0; y < 1000; y++)
            acc += grid[x][y];
    return acc;
}

function part2(){
    const grid = Array.from({ length: 1000 }, () => Array(1000).fill(0));
    for (let line of lines) {
        const match = line.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
        if (!match) continue;
        const [, op, x1s, y1s, x2s, y2s] = match;
        const x1 = Number(x1s), y1 = Number(y1s), x2 = Number(x2s), y2 = Number(y2s);
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                if (op === "turn on")
                    grid[x][y] += 1;
                else if (op === "turn off") 
                    grid[x][y] = Math.max(0, grid[x][y] - 1);
                else 
                    grid[x][y] += 2;
            }
        }
    }
    let acc = 0;
    for (let x = 0; x < 1000; x++)
        for (let y = 0; y < 1000; y++)
            acc += grid[x][y];
    return acc;
}

console.log(part1());
console.log(part2());
