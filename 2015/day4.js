const crypto = require('crypto')

let stringToHash = "yzbqklnj";
let boolean = false;
let foo = 0;


while (boolean == false){
    let bar = stringToHash + foo
    let hash = crypto.createHash('md5').update(bar).digest('hex');
    if (hash[0] == "0" && hash[1] == "0" && hash[2] == "0" && hash[3] == "0" && hash[4] == "0" && hash[5] == "0"){
        console.log(bar);
        console.log(hash)
        boolean = true;
    }
    else 
        foo ++
}


