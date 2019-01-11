function checkFactorial(n) {
    let x = 1;

    for (let i = 2; n > x; ++i) {
        x *= i;        
    }
    return x === n;
}
