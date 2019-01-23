int boxPiles(int[] a) {
    var n = a.Length;
    var used = new bool[n];
    var usedNum = 0;
    var result = 0;
    
    Array.Sort(a);
    
    while (n > usedNum) {
        var strength = 0;
        for (int i = 0; n > i; ++i) {
            if (a[i] >= strength && !used[i]) {
                strength++;
                used[i] = true;
                usedNum++;
            }
        }
        ++result;
    }

    return result;
}