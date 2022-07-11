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

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.arr[this.tail++] = data;
  }
  pop() {
    return this.arr[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
}

let [m, n, k] = input
  .shift()
  .split(" ")
  .map((v) => +v);
function solution() {}

solution();
