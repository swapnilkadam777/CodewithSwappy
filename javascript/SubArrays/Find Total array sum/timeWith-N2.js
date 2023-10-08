// Using with prifix techniqe
let A =[1,2,3,4] 
let N =  A.length;
for(let i=1;i<N;i++){
    A[i] +=A[i-1];
}
sum = 0;
for(let i=0;i<N;i++){
	    for(let j=i;j<N;j++){ 
	        if(i == 0){
	            sum +=A[j];
	        }else{
	            sum += A[j]-A[i-1];
	        }
	    } 
} 
console.log(sum)

