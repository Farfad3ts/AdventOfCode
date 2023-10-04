let path = "day1.txt"

let result = require("fs").readFileSync(path, "utf-8");
let acc = 0;
let basementIndex = -1;
for (let i = 0; i < result.length; i++) {
    result[i] === "(" ? acc++ : acc--;
    if (acc === -1 && basementIndex === -1) {
        basementIndex = i + 1;
    }
}

console.log(acc);
console.log(basementIndex);