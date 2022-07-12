#include <bits/stdc++.h>
using namespace std;

int n,c,temp;

map<int,pair<int,int>> m;
int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>c;
  for(int i=0;i<n;i++){
    cin>>temp;
    if(m.count(temp)){
      auto cur = m[temp];
      cur.first++;
      m.insert({temp,cur});
    } else{
      m.insert({temp,{1,i}});
    }
  }

  for(auto it = m.begin(); it!=m.end();it++){
    cout<<"key:"<<it->first<<" "<<"value:"<<it->second<<"\n";
  }

}