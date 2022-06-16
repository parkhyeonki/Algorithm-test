#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int t;
  cin>>t;

  while(t--){
    string cmd,arr;
    int n;
    cin>>cmd;
    cin>>n;
    cin>>arr;

    deque<int>dq;
    if(n==0){
      cout<<"error"<<"\n";
      continue;
    }

    for(char a : arr){
      if(a =='['||a==']'||a==','){
        continue;
      } else{
        dq.push_back(a-'0');
      }
    }

    for(char a:cmd){
      if(a == 'R'){
        reverse(dq.begin(),dq.end());
      }
      if(a == 'D'){
        dq.pop_front();
      }
    }

    if(dq.empty()){
      cout<<"error"<<"\n";
    } else{
      cout<<"[";
      for(int i=0;i<dq.size();i++){
        if(i == dq.size()-1){
          cout<<dq[i];
        } else{
        cout<<dq[i]<<",";
        }

      }
      cout<<"]"<<"\n";
    }


  }
}

