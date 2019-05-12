int sumOfMultiples(int n, int k) {
    var result = 0;

    for (var i = k; n >= i; i += k)
        result += i;

    return result;
}
