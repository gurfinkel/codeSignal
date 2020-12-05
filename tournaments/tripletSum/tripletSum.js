function tripletSum(B, A) {
    A.sort(function(a, b) {return a - b});
    var res = Number.MAX_VALUE;
    
    for (i=0; i<A.length-2; i++) {
        if (i==0 || A[i] > A[i-1]) {
            var j=i+1;
            var k=A.length-1;
            
            while (j<k) {
                if (B === (A[i]+A[j]+A[k])) {
                    return true; // A[i]+A[j]+A[k];
                }
                
                if (Math.abs(B-(A[i]+A[j]+A[k])) < Math.abs(B-res)) {
                    res = A[i]+A[j]+A[k];
                    
                    if (A[i]+A[j]+A[k]<B) {
                        j++;
                    } else {
                        k--;
                    }
                    
                } else if (A[i]+A[j]+A[k]<B) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }
    return false; // res;
}
