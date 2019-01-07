function cyclicSequence(sequence) {
    let found = false;
    let st = -1;

    for (let i = 1; sequence.length > i; ++i) {
        if (sequence[i - 1] == sequence[i]) {
            return false;
        }
        if (sequence[i - 1] > sequence[i]) {
            if (found) {
                return false;
            }
            found = true;
            st = i;
        }
    }

    return -1 !== st && sequence[0] > sequence[sequence.length - 1] || -1 === st;
}
    