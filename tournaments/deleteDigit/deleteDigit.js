function deleteDigit(n) {
    let result = 0;

    for (let i = 1; n >= i; i *= 10) {
        const newItem = ~~(n / (10*i)) * i + n%i;
        result = Math.max(result, newItem);
    }

    return result;
}
