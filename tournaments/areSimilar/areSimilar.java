boolean areSimilar(int[] a, int[] b) {
    int rs = 0, s1 = 1, s2 = 1;
    for (int i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            rs++;
        s1 *= a[i];
        s2 *= b[i];
    }
    return rs <= 2 && s1 == s2;
}
