function subtractionByRegrouping(minuend, subtrahend) {
    const n = String(minuend).length;
    const result = new Array(n);

    for (let i = 0; n > i; ++i) {
        result[i] = minuend % 10;
        minuend = ~~(minuend / 10);
    }

    for (let i = 0; n > i; ++i) {
        if (subtrahend%10 > result[i]) {
            result[i] += 10;
            --result[i + 1];
        }
        subtrahend = ~~(subtrahend / 10);
    }

    return result;
}
