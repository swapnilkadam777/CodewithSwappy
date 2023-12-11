// Using by counting techniqe
let A = [1, 2, 3, 4];
let N = A.length;
sum = 0;
for (let i = 0; i < N; i++) {
  sum += (i + 1) * (N - i) * A[i];
}
console.log(sum);
