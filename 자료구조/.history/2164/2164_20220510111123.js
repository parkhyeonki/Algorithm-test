/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .map((val) => +val);
  let card = [];
  console.log(input);
  for (let i = input; i > 0; i--) card.push(i);
  console.log(card);
}

solution();

//6장의 카드
// 카드 [6,5,4,3,2,1]
// 바닥 [1]
// 카드 [2,6,5,4,3]
