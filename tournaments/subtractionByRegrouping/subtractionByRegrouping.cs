int[] subtractionByRegrouping(int minuend, int subtrahend) {
    int len = ("" + minuend).Length;
    int[] res = new int[len];    

    for (int i = 0, div = minuend; i < len; i++) {
        res[i] = div % 10;
        div /= 10;
    }
 
    for (int i = 0, div = subtrahend; i < len; i++) {
        int num = div % 10;

        if (num > res[i]) {
            res[i] += 10;
            res[i + 1] -= 1;
        }
        div /= 10;
    }
     
    return res;
}
