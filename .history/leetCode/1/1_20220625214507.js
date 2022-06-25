let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let nums = input[0].split(" ").map((v) => +v);
  let arr = nums.map((v, idx) => {
    return [v, idx];
  });
  let target = +input[1];
  //Submit
  let left = 0;
  let right = 1;

  arr.sort((a, b) => a[0] - b[0]);

  while (1) {
    if (left === right) right++;
    let sum = arr[left][0] + arr[right][0];

    if (sum === target) break;
    else if (sum < target) right++;
    else left++;
  }

  console.log([arr[left][1], arr[right][1]]);
  return [ans_l, ans_r];
}

solution(input);
