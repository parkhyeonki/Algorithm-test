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

  input = input[0];
  let len = input.length;

  let ans = 0;
  if (len === 1) {
    ans += input;
  } else if (len > 1) {
    ans += 1 * 9;
  } else if (len > 2) {
    ans += 20 * 9;
  } else if (len > 3) {
    ans += 300 * 9;
  } else if (len > 4) {
    ans += 4000 * 9;
  } else if (len > 5) {
    ans += 50000 * 9;
  } else if (len > 6) {
    ans += 600000 * 9;
  } else if (len > 7) {
  } else if (len > 8) {
  } else if (len > 9) {
  }
}

solution();
