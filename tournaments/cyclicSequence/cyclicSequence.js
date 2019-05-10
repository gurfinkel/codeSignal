function cyclicSequence(sequence) {
    let a = 0;
    let b = -1;

    for (let i = 1; sequence.length > i; ++i) {
        if (sequence[i - 1] === sequence[i]) return false;
        if (sequence[i - 1] > sequence[i]) {
            if (a) return false;
            a = 1;
            b = i;
        }
    }

    return -1 !== b && sequence[0] > sequence[sequence.length - 1] || -1 === b;
}
