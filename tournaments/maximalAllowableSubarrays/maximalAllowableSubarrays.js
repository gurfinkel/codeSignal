function maximalAllowableSubarrays(inputArray, maxSum) {
    const n = inputArray.length;
    const result = new Array(n);
    let index = -1;
    let a = 0;

    for (let i = 0; n > i; ++i) {
        if (0 < i)
            a -= inputArray[i - 1];
        while (n > index + 1 && a + inputArray[index + 1] <= maxSum)
            a += inputArray[++index];
        result[i] = index;
    }

    return result;
}
