/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let ans;
function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let n = +input.splice(0, 1)[0];
  let schedule = [];
  for (let i = 0; i < n; i++) {
    schedule.push(input[i].split(" ").map((v) => +v));
  }

  // check
  for (let i = 0; i < n; i++) {
    if (i + schedule[i][0] > n) {
      continue;
    }
    solve(n, schedule, i, 0);
  }
}

function solve(n, schedule, day, sum) {
  let nextDay = day + schedule[day][0];
  sum += schedule[day][1];

  if (nextDay >= n) {
    return;
  }

  for (let i = nextDay; i < n; i++) {
    let nextSum = sum + schedule[i][1];
    let next;
  }

  console.log(nextDay, sum);
}

solution();
