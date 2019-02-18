function countDistantPairs(inputString, distance) {
    let result = 0;

    for (let i = 0; inputString.length > i + distance + 1; i++) {
        if (inputString.substring(i, i + 1) === inputString.substring(i + distance + 1, i + distance + 2)) {
            ++result;
        }
    }

    return result;
}
