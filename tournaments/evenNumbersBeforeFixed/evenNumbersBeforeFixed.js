function evenNumbersBeforeFixed(sequence, fixedElement) {
    let result = 0;

    for (let i = 0; sequence.length > i; ++i) {
        if (!(sequence[i] & 1) && sequence[i] !== fixedElement) ++result;
        if (sequence[i] === fixedElement) return result;
    }

    return -1;
}
