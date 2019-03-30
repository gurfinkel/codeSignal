function isGeometricProgression(sequence) {
    const n = sequence.length;

    for (let i = 1; n - 1 > i; ++i) {
        if (sequence[i]**2 !== sequence[i-1]*sequence[i+1]) return false;
    }

    return true;
}
