// Time complexity with N+1/2
// Using by counting techniqe 
A= [1,2,3,4] 
let N =  A.length; 
let sum = 0; 
for(let i=0;i<=N/2;i++){  
    if(((N%2 == 0) && (i < (N/2))) || (N%2 != 0) ){ 
      sum += (i+1)*(N-i)*A[i];
    }
    if((N%2 == 0) && (i < (N/2))){  
        sum += (i+1)*(N-i)*A[N-i-1];
    }
    if((N%2 != 0) && (i != Math.floor(N/2))){  
        sum += (i+1)*(N-i)*A[N-i-1];
    }
}
console.log(sum)