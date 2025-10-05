import * as fs from "fs"

const input = fs.readFileSync('input/day3.txt', 'utf8');

function part1(){
  const visited = new Set(['0-0']);
  let x = 0, y = 0;

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case '^':
        x++;
        break;
      case 'v':
        x--;
        break;
      case '>':
        y++;
        break;
      case '<':
        y--;
        break;
    }
    visited.add(`${x};${y}`);
  }
  return visited.size
}

function part2(){
  let [y, x] = [
    [0, 0],
    [0, 0],
  ];
  const toDir = {
  '^': [-1, 0],
  'v': [1, 0],
  '<': [0, -1],
  '>': [0, 1],
  };
  const houses = new Set(['0,0']);
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const [dy, dx] = toDir[char];
    y[i % 2] += dy;
    x[i % 2] += dx;
    houses.add([x[i % 2], y[i % 2]].join());
  }
  return houses.size
}

console.log(part1())
console.log(part2())