bool checkFactorial(int n) {
    int i = 1, fac = 1;

    while (fac <= n) {
        if (fac == n)
            return true;
        fac *= (++i);
    }
    
    return false;
}
