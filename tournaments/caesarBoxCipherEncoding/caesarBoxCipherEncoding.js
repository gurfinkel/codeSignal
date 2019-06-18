function caesarBoxCipherEncoding(inputString) {
    const n = Math.sqrt(inputString.length);
    let result = '';

    for (let i = 0; n > i; ++i)
        for (let j = 0; n > j; ++j)
            result += inputString[i + j * n];

    return result;
}
