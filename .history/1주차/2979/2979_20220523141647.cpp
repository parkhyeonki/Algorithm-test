#include <bits/stdc++.h>

using namespace std;
int n,t;
vector<int> p;
string com;
int a,b;
vector<int> brg;
int main()
{
  freopen("input.txt", "r", stdin);
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>> n;
  for(int i=0;i<n;i++){
    int tmp;
    cin>>tmp;
    p.push_back(tmp);
  }
  cin>>t;

  fill(brg.begin(),brg.end(),0);

  for(int j=0;j<t;j++){
    cin>> com >> a >> b;
    if(com == "penguins"){
      p[b-1]=a;
    } else if(com == "bridge"){

    }


  }

  


}