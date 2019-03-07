function firstReverseTry(arr) {
    if (null === arr || 0 === arr.length) {
        return arr;
    }

    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

    return arr;
}
