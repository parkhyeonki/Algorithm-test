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
    .split(" ")
    .map((val) => val.trim());
  let [a, b, c] = input.map((v) => +v);

  console.log(a, b, c);

  const dfs = () => {
    if (a === 0 && !cnt) ans.push(c);
  };
}

solution();
