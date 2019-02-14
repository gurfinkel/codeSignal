function makeArrayConsecutive(sequence) {
    const result = [];
    let index = 0;

    sequence.sort((a, b) => a - b);

    for (let i = sequence[index]; sequence[sequence.length - 1] > i; ++i) {
        if (i !== sequence[index]) {
            result.push(i);
        } else {
            ++index;
        }
    }

    return result;
}
