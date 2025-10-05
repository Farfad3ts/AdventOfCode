const crypto = require('crypto')

let stringToHash = "yzbqklnj";

function part1(){
    let boolean = false;
    let index = 0;
    while (boolean == false){
        let hashedInput = stringToHash + index
        let hash = crypto.createHash('md5').update(hashedInput).digest('hex');
        if (hash[0] == "0" && hash[1] == "0" && hash[2] == "0" && hash[3] == "0" && hash[4] == "0"){
            boolean = true;
        }
        else 
            index ++
    }
    return index
}

function part2(){
    let boolean = false;
    let index = 0;
    while (boolean == false){
        let hashedInput = stringToHash + index
        let hash = crypto.createHash('md5').update(hashedInput).digest('hex');
        if (hash[0] == "0" && hash[1] == "0" && hash[2] == "0" && hash[3] == "0" && hash[4] == "0" && hash[5] == "0"){
            boolean = true;
        }
        else 
            index ++
    }
    return index
}

console.log(part1())
console.log(part2())