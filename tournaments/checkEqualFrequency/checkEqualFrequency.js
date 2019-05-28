function checkEqualFrequency(inputArray) {
    const n = inputArray.length;
    let a = 1;

    inputArray.sort((a, b) => a - b);

    while (n > a && inputArray[a - 1] === inputArray[a]) ++a;

    if (n % a) return false;

    for (let i = 0; n > i; i += a) {
        if (i && inputArray[i] === inputArray[i - 1]) return false;
        for (let j = i + 1; a + i > j; ++j) {
            if (inputArray[j] !== inputArray[j - 1]) return false;
        }
    }

    return true;
}
