int[] replaceMiddle(int[] arr) {
    var n = arr.Length;
    
    if (1 == (n & 1)) {
        return arr;
    }

    var halfLength = n / 2;
    var middle = arr[halfLength - 1] + arr[halfLength];
    var result = new int[n - 1];
    
    for (int i = 0; n - 1 > i; ++i) {
        if (halfLength - 1 > i) {
            result[i] = arr[i];
        } else if (halfLength - 1 == i) {
            result[i] = middle;
        } else if (halfLength - 1 < i) {
            result[i] = arr[1 + i];
        }
    }
    
    return result;
}
