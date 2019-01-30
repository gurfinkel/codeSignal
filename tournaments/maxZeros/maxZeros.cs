int maxZeros(int n) {
    var result = 0;
    var max = 0;
    
    for (int i = 2; n >= i; ++i) {
        var z = 0;
        var temp = n;
        
        while (0 < temp) {
            if (0 == temp % i) {
                ++z;
            }
            temp /= i;
        }
        if (z > max) {
            max = z;
            result = i;
        }
    }
    return result;
}
