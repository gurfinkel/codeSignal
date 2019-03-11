function deleteDigit(n) {
    let result = 0;

    for (let i = 1; n >= i; i *= 10) {
        const newItem = ~~(n / (10*i)) * i + n%i;
        result = Math.max(result, newItem);
    }

    return result;
}

function deleteDigit(n) {
    const getDigits = (a) => {
        const r = [];

        while (0 < a) {
            r.push(a%10);
            a = ~~(a/10);
        }

        return r.reverse();
    }

    const digits = getDigits(n);
    let result = 0;

    for (let i = 0; i in digits; ++i) {
        result = Math.max(result, parseInt(digits.slice(0,i).concat(digits.slice(i+1)).join('')));
    }

    return result;
}

function deleteDigit(n) {
    var answer = 0,
        digits = [];

    while (n) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (var deletedIndex = 0; deletedIndex < digits.length; deletedIndex++) {
        var number = 0;
        for (var i = digits.length - 1; i >= 0; i--) {
            if (i !== deletedIndex) {
                number = number * 10 + digits[i];
            }
        }
        answer = Math.max(answer, number);
    }
    
    return answer;
}
