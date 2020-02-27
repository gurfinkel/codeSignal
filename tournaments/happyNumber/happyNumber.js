function happyNumber(n) {
    const getSumOfSquaresOfDigits = function(a) {
        let result = 0;
        while (a) {
            result += (a%10) * (a%10);
            a = ~~(a/10);
        }
        console.log(result);
        return result;
    }

    const store = new Set();

    while (1 !== n) {
        n = getSumOfSquaresOfDigits(n);

        if (store.has(n)) {
            return false;
        } else {
            store.add(n);
        }
    }

    return true;
}
