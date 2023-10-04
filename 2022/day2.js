let path = "day2.txt";

let result = require("fs").readFileSync(path, "utf8").split("\r\n").map(n => n.split(" "))
let acc = 0
for(let line of result){
    checkLetter(line[1])
    console.log(acc)
}
function checkLetter(letter){
    switch (letter) {
        case "X":
            acc += 1;
            break;
        case "Y":
            acc += 2;
            break;
        case "Z":
            acc +=3;
            break;
    }
    return acc;
}

function winner(letter1, letter2){
    switch(true){
        case "A":
    }
}