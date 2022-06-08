/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  input = input
    .join("")
    .split("")
    .map((v) => +v);
  let nums = Array.from({ length: 10 }, () => 0);

  for (let i = 0; i < input.length; i++) nums[input[i]]++;
  // if (nums[6] - nums[9] === 1) {
  //   nums[6] -= 1;
  // } else if (nums[6] - nums[9] === -1) {
  //   nums[9] -= 1;
  // }

  let maxNum = Math.max(...nums);

  console.log(maxNum, nums);
}

solution();
