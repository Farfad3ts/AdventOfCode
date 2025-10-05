import * as fs from "fs"

function part1(s){
  const vowels = 'aeiou';
  const vowelCount = s.split('').filter((char) => vowels.includes(char)).length;
  if (vowelCount < 3)
    return false;
  let hasDoubleLetter = false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      hasDoubleLetter = true;
      break;
    }
  }
  const forbiddenStrings = ['ab', 'cd', 'pq', 'xy'];
  if (forbiddenStrings.some((fs) => s.includes(fs)))
    return false;
  return hasDoubleLetter;
}

fs.readFile('input/day5.txt', 'utf8', (err, input) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines = input.split('\n');
  const niceCount = lines.filter((line) => part1(line.trim())).length;
  console.log('Number of nice strings:', niceCount);
});

function part2(){
  let result = fs.readFileSync("input/day5.txt", 'utf-8').split('\r\n');
  let niceStringCount = 0;
  const reg = new RegExp(/^(?!.*(?:ab|cd|pq|xy))(?=([aeiou].*){3,})(?=.*((.)\3))/);
  for(let i = 0; i < result.length; i++){
      let regexIsTrue = reg.test(result[i])
      if(regexIsTrue == true)
          niceStringCount++
  }
  console.log(niceStringCount)
}

part2()