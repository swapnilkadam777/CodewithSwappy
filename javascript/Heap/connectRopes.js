// You are given an array A of integers that represent the lengths of ropes.
// You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.
// Find and return the minimum cost to connect these ropes into one rope.
// Problem Constraints
// 1 <= length of the array <= 100000
// 1 <= A[i] <= 1000
// Input Format
// The only argument given is the integer array A.
// Output Format
// Return an integer denoting the minimum cost to connect these ropes into one rope.
// Example Input
// Input 1:
//  A = [1, 2, 3, 4, 5]
// Input 2:
//  A = [5, 17, 100, 11]
// Example Output
// Output 1:
//  33
// Output 2:
//  182
//=============================================================
//A = [55,96,84,70,11,27,29,165,91,54,71,134,131,44,70,39,151,64,2,160,10,82,26,146,23,19,26,89,24,14,198,53,85,162]
A = [1,2,3,4,5,6];
A.sort((a, b) => a - b);
let N = A.length;
ans = 0;   
console.log(A,ans); 
while(N>1){  
   let f = A.length>0? getMin():0;  
   let l = A.length>0? getMin():0;  
   sum = f+l; 
   if(sum){  
    ans += sum;
    insert(sum); 
   }
   N = A.length;  
   
console.log(A,ans); 
}   
console.log(ans); 
function getMin(){
    let res = A.shift();  
    if(A.length>0){ 
        insert(A.pop());
    } 
    return res; 
}
function swap(s,e){  
    let temp = A[s];
    A[s] =  A[e];
    A[e] = temp;    
}
function insert(x){
    A.unshift(x);
    N = A.length;
    i = 0;
    while(i<N){
        let l = (2*i)+1;
        let r = (2*i)+2;
        if(r<N){
            if(A[l]<=A[i] && A[l]<=A[r]){
                swap(i,l);
                i = l;
            }else if(A[r]<=A[i] && A[r]<=A[l]){
                swap(i,r);
                i = r;
            }else{
                break;
            }
        }else if(l<N){
            if(A[l]<=A[i]){
                swap(i,l);
                i = r;
            }else{
                break;
            }
        }else{
            break;
        }
    }  
} 

