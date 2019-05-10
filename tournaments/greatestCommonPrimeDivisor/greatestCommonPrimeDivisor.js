function greatestCommonPrimeDivisor(a, b) {
    const isPrime = function(n) {
        for (let i = 2; n > i; ++i)
            if (!(n % i))
                return false;
        return true;
    };

    let result = -1;
    let min = Math.min(a, b);

    for (let i = 2; min >= i; ++i)
        if (isPrime(i) && !(a % i) && !(b % i) && result < i)
            result = i;

    return result;
}
