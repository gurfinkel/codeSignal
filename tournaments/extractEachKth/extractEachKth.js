function extractEachKth(inputArray, k) {
    const result = [];

    for (let i = 0; inputArray.length > i; ++i) {
        if ((i + 1) % k) {
            result.push(inputArray[i]);
        }
    }

    return result;
}
