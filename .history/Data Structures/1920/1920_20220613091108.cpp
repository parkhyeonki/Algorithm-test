#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    //input
    int n,m;
    cin>>n;

    vector<int> v(n);
    for(int i=0;i<n;i++) cin>>v[i];
    
    cin >>m;
    
    for(int i=0;i<m;i++){
      int check;
      cin>>check;

      if(find(v.begin(),v.end(),check) != v.end()){
        cout<<1<<"\n";
      } else {
        cout<<0<<"\n;
      }

    };
    


  

}