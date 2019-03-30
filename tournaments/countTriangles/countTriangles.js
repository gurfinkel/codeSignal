function countTriangles(x, y) {
    const n = x.length;
    let result = 0;

    for (let i = 0; n > i; ++i) {
        for (let j = i + 1; n > j; ++j) {
            for (let k = j + 1; n > k; ++k) {
                if ((x[i] - x[j])*(y[i] - y[k]) !== (x[i] - x[k])*(y[i] - y[j])) ++result;
            }
        }
    }

    return result;
}
