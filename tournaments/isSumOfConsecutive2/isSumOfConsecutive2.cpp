int isSumOfConsecutive2(int n) {
    int count=0;

    for(int i = 1; i <= n / 2; i++) {
        int sum = 0;
        int k = i;
        while (k <= n / 2 + 1 && sum < n)
            sum += k++;
        count += (sum == n);
    }
    return count;
}