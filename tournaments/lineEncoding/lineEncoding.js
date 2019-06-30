function lineEncoding(s) {
    const n = s.length;
    const result = [];
    let count = 1;

    for (let i = 1; n > i; ++i) {
        if (s.charCodeAt(i - 1) - s.charCodeAt(i)) {
            if (1 < count) {
                result.push(count);
                count = 1;
            }
            result.push(s[i - 1]);
        } else {
            ++count
        }
    }

    if (1 < count) result.push(count);
    result.push(s[n - 1]);

    return result.join('');
}
