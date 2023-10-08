let A =[1,2,3,4] 
let N =  A.length;
let Sum = 0;
for(let i=0;i<N;i++){
    for(let j=i;j<N;j++){ 
         for(let k=i;k<=j;k++){ 
             sum +=A[k];
         } 
    } 
} 
console.log(sum);
