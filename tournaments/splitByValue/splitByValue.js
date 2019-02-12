function splitByValue(k, elements) {
    const n = elements.length;
    const result = new Array(n);
    let index = 0;

    for (const item of elements) {
        if (k > item) {
            result[index++] = item;
        }
    }

    for (const item of elements) {
        if (k <= item) {
            result[index++] = item;
        }
    }

    return result;
}
