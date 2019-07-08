function isArithmeticProgression(sequence) {
    const d = sequence[1] - sequence[0];

    for (let i = 2; sequence.length > i; ++i)
        if (sequence[i] - sequence[i - 1] !== d)
            return false;

    return true;
}
