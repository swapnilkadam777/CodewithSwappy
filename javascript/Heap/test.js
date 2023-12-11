   let A = [1,18]
   A.sort((a, b) => a - b);
    let N = A.length;
    let ans = 0;

    while (N > 1) {
      let f = A.length > 0 ? getMin() : 0;
      let l = A.length > 0 ? getMin() : 0;
      let sum = f + l;

      if (sum) {
        ans += sum;
        insert(sum);
      }
      N = A.length;
    }

    function getMin() {
      let res = A.shift();
      if (A.length > 0) {
        insert(res);
      }
      return res;
    }

    function insert(x) {
      let i = A.length;
      A.push(x);
      while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
        if (A[i] < A[parent]) {
          swap(i, parent);
          i = parent;
        } else {
          break;
        }
      }
    }

    function swap(s, e) {
      let temp = A[s];
      A[s] = A[e];
      A[e] = temp;
    }
    console.log(ans)
    return ans;