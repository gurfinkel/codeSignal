function firstReverseTry(arr) {
    if (!arr || !arr.length) return arr;

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    return arr;
}
