function maxSubarray(inputArray) {
    let result = 0;
    let a = 0;

    for (let i = 0; inputArray.length > i; ++i) {
        a = Math.max(0, a + inputArray[i]);
        result = Math.max(result, a);
    }

    return result;
}
