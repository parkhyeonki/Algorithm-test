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

  let n = +input[0];
  let cnt = 0;

  if (n <= 110) {
    cnt += n;
  } else {
    cnt += 99;
    for (let i = 111; i <= n; i++) {
      let divideNum = toString(i).split("");
      let len = divideNum.length;
      let tmp = divideNum[1] - divideNum[0];
      let check = false;
      for (let j = 2; j < len; j++) {
        if (tmp !== divideNum[j] - divideNum[j - 1]) {
          break;
        } else {
        }
      }
    }
  }

  console.log(n);
}

solution();
