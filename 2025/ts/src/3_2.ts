import * as fs from 'fs';

const input = fs.readFileSync("../input/3.txt", "utf8").split("\r\n");
function largestJoltage(bank: string, take = 12): bigint {
    let result = "";
    let start = 0;
    for (let i = 0; i < take; i++) {
        const remaining = take - i;
        const end = bank.length - remaining;
        let bestIndex = start;
        for (let j = start; j <= end; j++) {
            if (bank[j] > bank[bestIndex]) {
                bestIndex = j;
            }
        }
        result += bank[bestIndex];
        start = bestIndex + 1;
    }
    return BigInt(result);
}

const total = input.reduce((sum, bank) => {
    return sum + largestJoltage(bank);
}, 0n);

console.log(total.toString());