#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  string str;
	cin >> str;
 
	int arr[10]={0};
	int tmp;
	for(int i=0; i<str.size();i++){
		tmp = str[i]-'0';
		if(tmp ==9) {
			arr[6]++;
		}
		else{
			arr[tmp]++;
		}
	}
 
	int max = 1;
	
	if(arr[6] % 2==0){
		arr[6] = ceil(arr[6]/2);	
	}else{
		arr[6] = ceil(arr[6]/2)+1;
	}
	
	for(int i=0; i<9; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
 
	cout << max;
 
	return 0;
}