int sumOfMultiples(int n, int k) {
    int sum = 0;

    for(int i = k; n >= i; i+= k) {
        sum += i;
    }
    
    return sum;
}
