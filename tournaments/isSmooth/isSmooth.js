function isSmooth(arr) {
    const n = arr.length;
    const half = ~~(n / 2);

    if (arr[0] !== arr[n - 1]) return false;

    return arr[0] === (1 === (n & 1) ? arr[half] : (arr[half] + arr[half - 1]));
}
