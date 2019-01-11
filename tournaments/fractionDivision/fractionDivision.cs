int[] fractionDivision(int[] a, int[] b) {
    int z = a[0] * b[1];
    int n = a[1] * b[0];

    for (int i = 2; 100 > i; ++i) {
        while (0 == z % i && 0 == n % i) {
            z /= i;
            n /= i;
        }
    }
        
    return new int[] {z, n};
}
