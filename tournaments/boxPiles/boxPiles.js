function boxPiles(a) {
    const n = a.length;
    const store = new Array(n).fill(false);
    let index = 0;
    let result = 0;

    a.sort((a, b) => a - b);

    while (n > index) {
        let strength = 0;
        for (let i = 0; n > i; ++i) {
            if (!store[i] && a[i] >= strength) {
                store[i] = true;
                ++strength;
                ++index;
            }
        }
        ++result;
    }

    return result;
}
