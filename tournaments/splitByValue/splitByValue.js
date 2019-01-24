function splitByValue(k, elements) {
    const result = [];
    const n = elements.length;

    for (let i = 0; n > i; ++i) {
        if (k > elements[i]) {
            result.push(elements[i]);
        }
    }

    for (let i = 0; n > i; ++i) {
        if (k <= elements[i]) {
            result.push(elements[i]);
        }
    }

    return result;
}
    