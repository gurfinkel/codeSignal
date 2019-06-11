function isArithmeticProgression(sequence) {
    const a = sequence[1] - sequence[0];

    for (let i = 2; sequence.length > i; ++i)
        if (sequence[i] - sequence[i - 1] !== a)
            return false;

    return true;
}
