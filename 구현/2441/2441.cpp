#include <bits/stdc++.h>
using namespace std;
int n;


int main()
{
freopen("input.txt", "r", stdin);
ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
	cin >> n;

	if (n < 1 || n > 100)
		return 0;
	

	for (int i = 0; i < n; i++) 
	{
		for (int j = 0; j < i; j++) 
		{
			cout << " ";
		}

		for (int k = n - i; k > 0; k--) 
		{
			cout << "*";
		}
		
		cout << "\n";
	}

	return 0;
}