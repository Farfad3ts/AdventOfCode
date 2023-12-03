const fs = require("fs");
const result = fs.readFileSync("day1.txt", "utf-8").split("\r\n").reduce((acc, line) => {
        const cleanedLine = line.replace(/[a-zA-Z]/g, "");
        return acc + Number(cleanedLine[0] + cleanedLine[cleanedLine.length - 1]);
    }, 0);
console.log(result);