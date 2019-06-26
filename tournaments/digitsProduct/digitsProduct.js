function digitsProduct(product) {
    let result = 0;
    let store = [];

    if (!product) return 10;
    if (1 === product) return 1;

    for (let divisor = 9; 1 < divisor; --divisor)
        while (!(product % divisor)) {
            product /= divisor;
            store.push(divisor);
        }

    if (1 !== product) return -1;

    for (let i = store.length - 1; 0 <= i; --i)
        result = 10 * result + store[i];

    return result;
}
