const fs = require("fs");
const numberMapper = {
    one: 1, two: 2, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9,
};

let input = fs.readFileSync("day1.txt", 'utf-8').trim().split("\r\n");
const calculateSum = (result, item) => {
    const matches = item.toLowerCase().matchAll(/(?=((\d)|one|two|three|four|five|six|seven|eight|nine))/gm);
    const hits = [];
    for (const match of matches)
        hits.push(match[1]);
    const firstDigit = hits[0];
    const lastDigit = hits[hits.length-1];
    if (hits.length) {
        const converted = `${isNaN(parseInt(firstDigit)) ? numberMapper[firstDigit] : firstDigit}${isNaN(parseInt(lastDigit)) ? numberMapper[lastDigit] : lastDigit}`;
        return result + parseInt(converted);
    }
    return result;
};
const sum = input.reduce(calculateSum, 0);
console.log(sum);