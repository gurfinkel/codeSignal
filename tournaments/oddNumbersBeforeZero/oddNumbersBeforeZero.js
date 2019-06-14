function oddNumbersBeforeZero(sequence) {
    let result = 0;

    for (const item of sequence) {
        if (!item) break;
        if (item & 1) ++result;
    }

    return result;
}
