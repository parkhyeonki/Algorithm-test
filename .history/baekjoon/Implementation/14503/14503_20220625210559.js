/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());
function solution(input) {
  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let [r, c, d] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let map = [];
  for (let i = 0; i < n; i++) {
    map.push(
      input
        .shift()
        .split(" ")
        .map((v) => +v)
    );
  }
  console.log(n, m, r, c, d, map);
}

solution(input);
