function greatestCommonPrimeDivisor(a, b) {
    let min = Math.min(a, b);
    let maxPrime = -1;

    for (let i = 2; i <= min; ++i) {
        if(isPrime(i) && a % i == 0 && b % i == 0 && maxPrime < i) { 
            maxPrime = i;
        }
    }
    
    return maxPrime;
}

function isPrime(n) {
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) { 
            return false;
        }
    }

    return true;
}

