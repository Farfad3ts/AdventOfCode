let path = 'day2.txt';

let result = require("fs").readFileSync(path, "utf8").split("\r\n").map(v => v.split("x"))

let acc = 0;
for (let line of result) {
    let length = line[0] * line[1];
    let width = line[1] * line[2];
    let heigth = line[2] * line[0];
    const min = Math.min(length, width, heigth)
    let wrapOrder = (2 * length + 2 * width + 2 * heigth + min);
    acc += wrapOrder;
    console.log(acc)
}

//let result = require("fs").readFileSync(path, "utf8").split("\r\n").map(v => v.split("x").map(Number));

// let acc = 0;
// for (let line of result) {
//     let [l, w, h] = line;
//     const wrapOrder = 2 * (l * w + w * h + h * l) + Math.min(l * w, w * h, h * l);
//     acc += wrapOrder;
// }