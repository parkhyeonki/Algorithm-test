#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n;
  cin>>n;

  bool check = false;
  //divide psum

  for (int num = 1; num <= 1000000; num++) {
    string divideN = to_string(num);
    int len = divideN.length();

    int psum = num;
    for (int i = 0; i < len; i++) {
      int tmp = stoi(divideN[i]);
      psum += tmp;
    }

    if (psum === n) {
      console.log(num);
      check = true;
      break;
    }
  }
  //output
  if (!check) console.log(0);

}