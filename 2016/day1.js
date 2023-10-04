let path = "day1.txt"
let result = require("fs").readFileSync(path, "utf-8").split(", ");

let coordinates = [0, 0];
let j = 0;

for (let i = 0; i < result.length; i++) {
    var direction = result[i][0];
    let number = result[i].slice(1, 4);
    number = parseInt(number)
    if (direction == "R") 
        j++;
    else 
        j--;
    j = Math.abs(j)
    j = j % 4
    if (j == 0) {
        coordinates[1] += number
    }
    else if (j == 1) {
        coordinates[0] += number
    }
    else if (j == 2)
        coordinates[1] -= number
    else
        coordinates[0] -= number
    console.log(result[i])
    console.log(coordinates)
    console.log(Math.abs(coordinates[0]) + Math.abs(coordinates[1]))
}