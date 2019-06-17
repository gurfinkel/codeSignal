function replaceMiddle(arr) {
    const n = arr.length;

    if (n & 1) return arr;

    const halfLength = ~~(n / 2) - 1;

    arr[halfLength] = arr[halfLength] + arr[halfLength + 1];
    arr.splice(halfLength + 1, 1);

    return arr;
}
