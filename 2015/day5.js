const fs = require('fs');
const data = fs.readFileSync('day5.txt', 'utf8').split("\r\n");
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
const forbiddenSet = new Set(['ab', 'cd', 'pq', 'xy']);
let niceStringCount = 0;

for (let i = 0; i < data.length; i++) {
    let vowelCount = 0;
    let hasTwiceInARow = false;
    let hasForbiddenString = false;
    for (let j = 0; j < data[i].length; j++) {
        const currentChar = data[i][j];
        const nextChar = data[i][j + 1];
        if (vowelSet.has(currentChar)) {
            vowelCount++;
        }
        if (currentChar === nextChar)
            hasTwiceInARow = true;
        const currentPair = currentChar + (nextChar || ''); // Combine characters into a pair
        if (forbiddenSet.has(currentPair)) 
            hasForbiddenString = true;
            break; // No need to check further
    }
    if (vowelCount >= 3 && hasTwiceInARow && !hasForbiddenString)
        niceStringCount++;
}
console.log(niceStringCount);


function isNiceString(s) {
  // Check if it contains at least three vowels.
  const vowels = 'aeiou';
  const vowelCount = s.split('').filter((char) => vowels.includes(char)).length;
  if (vowelCount < 3) {
    return false;
  }

  // Check if it contains at least one letter that appears twice in a row.
  let hasDoubleLetter = false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      hasDoubleLetter = true;
      break;
    }
  }

  // Check if it does not contain forbidden strings.
  const forbiddenStrings = ['ab', 'cd', 'pq', 'xy'];
  if (forbiddenStrings.some((fs) => s.includes(fs))) {
    return false;
  }

  // If all criteria are met, it's a nice string.
  return hasDoubleLetter;
}

// Read the input file (assuming one string per line).
fs.readFile('day5.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const niceCount = lines.filter((line) => isNiceString(line.trim())).length;
  console.log('Number of nice strings:', niceCount);
});