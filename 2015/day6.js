const fs = require('fs');

let result = fs.readFileSync("day6.txt", "utf-8").split("\r\n").map(x => x.split(" "));
let A = Array(1000).fill(Array(1000).fill(0));
for(let i = 0; i < result.length; i++){
    if(result[i][0] != "turn"){
        let coordonate1 = result[i][1].split(',').map(Number);
        let coordonate2 = result[i][3].split(',').map(Number);
        
        console.log(coordonate1, coordonate2)
    
    }
}

// console.log(A)