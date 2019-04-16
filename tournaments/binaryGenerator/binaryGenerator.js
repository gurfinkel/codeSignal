function binaryGenerator(s) {
    const result = [];
    const zeroCode = '0'.charCodeAt();
    const a = [...s].map(item => item.charCodeAt() - zeroCode);
    const b = [];

    for (let i = 0; a.length > i; ++i)
        if (!a[i]) b.push(i);

    for (let i = 0; 1 << b.length > i; ++i) {
        for (let j = 0; b.length > j; ++j)
            a[b[j]] = (i>>j) & 1;
        result.push(a.map(item => String.fromCharCode(zeroCode + item)).join(''));
    }

    result.sort();

    return result;
}
