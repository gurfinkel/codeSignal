function cyclicSequence(sequence) {
    const n = sequence.length;
    let a = 0;
    let b = -1;

    for (let i = 1; n > i; ++i) {
        if (sequence[i - 1] === sequence[i]) return false;
        if (sequence[i - 1] > sequence[i]) {
            if (a) return false;
            a = 1;
            b = i;
        }
    }

    return ~b && sequence[0] > sequence[n - 1] || !~b;
}
