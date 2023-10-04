const fs = require('fs');

const input = fs.readFileSync('day3.txt', 'utf8').trimEnd();
const visitedSanta = new Set(['0-0']);
let test = input.match(/.{1,2}/g).map(x => x.split(''))
let x = 0, y = 0;
console.log(test)

const toDir = {
  '^': [-1, 0],
  'v': [1, 0],
  '<': [0, -1],
  '>': [0, 1],
};
function solve2(input) {
  let [y, x] = [
    [0, 0],
    [0, 0],
  ];
  const houses = new Set(['0,0']);
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const [dy, dx] = toDir[char];
    y[i % 2] += dy;
    x[i % 2] += dx;
    houses.add([x[i % 2], y[i % 2]].join());
  }
  console.log(houses.size);
}
solve2(input);


// console.log(visited.values());

