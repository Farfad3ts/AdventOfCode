let path = "day1.txt"

let result = require("fs").readFileSync(path, "utf8").split("\r\n").map(x => x.slice(""));

for(let line of result){
}
console.log(result)