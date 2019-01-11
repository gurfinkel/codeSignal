function sumOfCoprimes(m) {

    var ans = 0;
    for (var p = 2; p <= m; p++) {
        var a = p;
        var b = m;
        while (a > 0) {
            var tmp = a % b;
            b = a;
            a = tmp;
        }
    
        if (b === 1) {
            ans += p;
        }
    }
  
    return ans;
}
  
  