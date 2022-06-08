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

  input = input.join("").split("");
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      input.splice(i, 2, "2");
    }
    if (input[i] === "[" && input[i + 1] === "]") {
      input.splice(i, 2, "3");
    }
  }
  console.log(input);
}

solution();
