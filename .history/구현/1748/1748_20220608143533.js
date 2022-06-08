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

  input = input[0].split("");
  let len = input.length;
  let tmp = Number(input.splice(1, len).join("")) + 1;
    let ans = tmp * len;
    for (let i = 1; i < len; i++) {
      ans += i * (10 ** i - 10 ** (i - 1));
    }
    
    console.log(Number(ans));
  }
}

solution();
