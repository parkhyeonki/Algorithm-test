#include <bits/stdc++.h>
using namespace std;
string s;
int cnt[26], lcnt,vcnt;

bool isVowel(int a){
  return (a==0||a==4||a==8||a==14||a==20);
}

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  while(true){
    cin>>s;
    if(s=="end") break;
    memset(cnt,0,sizeof(cnt));
    lcnt = vcnt = 0;
    bool check = true;

    for(int i=0;i<s.size();i++){
      int idx = s[i]-'a';
      cnt[idx]++;
      if(isVowel(idx)) lcnt++, vcnt=0;
      else vcnt++,lcnt=0;
      if(vcnt==3||lcnt==3) check=false;
    }


  }

}