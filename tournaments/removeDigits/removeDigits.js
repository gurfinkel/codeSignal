function removeDigits(n, k) {
    const s = n.toString();
    const store = new Set();

    for (let i = 0; s.length - k >= i; ++i)
        store.add(parseInt(s.substring(i, i + k)));

    return [Math.min(...store), Math.max(...store)];
}
