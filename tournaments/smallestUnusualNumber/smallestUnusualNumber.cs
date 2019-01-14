int smallestUnusualNumber(string a) {
    if (1 == a.Length) {
        return 10 - (a[0] - '0');
    }
    
    if (-1 != a.IndexOf('0') || isUnusual(a)) {
        return 0;        
    }
    
    return 10 - (a[a.Length - 1] - '0');
}

bool isUnusual(string s) {
    var index = 0;
    var n = s.Length;
    var sumOfOnes = 0;
    var sumOfRest = 0;
    var mulOfRest = 1;
    
    while ((mulOfRest - sumOfRest - sumOfOnes) < n && index < n) {
        var item = s[index++];
        if (1 == (item - '0')) {
            ++sumOfOnes;
        } else {
            sumOfRest += (item - '0');
            mulOfRest *= (item - '0');
        }
    }
    
    return (1 >= s.Length - sumOfOnes || (sumOfOnes + sumOfRest) > mulOfRest);
}