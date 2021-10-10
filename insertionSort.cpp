#include <iostream>  
using namespace std;  
  
void insert(int a[], int n) /* function to sort an aay with insertion sort */  
{  
    int i, j, temp;  
    for (i = 1; i < n; i++) {  
        temp = a[i];  
        j = i - 1;  
  
        while(j>=0 && temp <= a[j])  /* Move the elements greater than temp to one position ahead from their current position*/  
        {    
            a[j+1] = a[j];     
            j = j-1;    
        }    
        a[j+1] = temp;    
    }  
}  
  
void printArr(int a[], int n) /* function to print the array */  
{  
    int i;  
    for (i = 0; i < n; i++)  
        cout << a[i] <<" ";  
}  
  
int main()  
{  
    int a[] = { 89, 45, 35, 8, 12, 2 };  
    int n = sizeof(a) / sizeof(a[0]);  
    cout<<"Before sorting array elements are - "<<endl;  
    printArr(a, n);  
    insert(a, n);  
    cout<<"\nAfter sorting array elements are - "<<endl;  
    printArr(a, n);  
  
    return 0;  
} 
