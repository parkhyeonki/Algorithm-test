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
  let num = input[0];
  let answer = 0;
  recur(num);

  return[answer,recur(str)%3 === 0 ? "YES" : "NO"];
  }

  

  console.log(cnt);
  console.log(answer);
}

function recur(str) {
  if(str < 10) return str;
  str = String(str).split('').reduce((acc,cur) => acc+ (+cur),0);
  answer++;
  return recur(str); 
}

solution(input);
