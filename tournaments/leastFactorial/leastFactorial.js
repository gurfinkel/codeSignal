function leastFactorial(n) {
    let result = 1;
    let a = 1;

    while (n > result) result *= a++;

    return result;
}
