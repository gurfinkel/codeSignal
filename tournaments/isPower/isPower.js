function isPower(n) {

    if (n === 1) {
        return true;
    }
  
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            var tmp = n;
            while (n % i === 0) {
                n /= i;
            }
            if (n === 1) {
                return true;
            }
            n = tmp;
        }
    }
    return false;
}
    