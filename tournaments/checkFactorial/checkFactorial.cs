boolean checkFactorial(int n) {
    int res = 1;

    for(int i = 1; i < 10; ++i) {
        res = res * i;
        if (res == n) {
            return  true;
        }
    }

    return false;
}
