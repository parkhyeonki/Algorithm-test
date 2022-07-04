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

let t = +input.shift();

let graph;
let vis;

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push(data) {
    this.arr[++this.tail] = data;
  }

  pop() {
    return this.arr[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
}

function BFS(x, y) {
  vis[x][y] = 1;
}

function solution() {
  while (t--) {
    graph = new Array(51).fill().map(() => new Array(51).fill(0));
    vis = new Array(51).fill().map(() => new Array(51).fill(0));
    let cnt = 0;
    let [m, n, k] = input
      .shift()
      .split(" ")
      .map((v) => +v);

    for (let i = 0; i < k; i++) {
      let [x, y] = input
        .shift()
        .split(" ")
        .map((v) => +v);
      graph[y][x] = 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === 1 && visited[i][j] === 0) {
          cnt++;
          BFS(i, j);
        }
      }
    }

    console.log(cnt);
  }
}

solution();
