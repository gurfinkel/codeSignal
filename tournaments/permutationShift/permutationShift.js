function permutationShift(permutation) {
    const n = permutation.length;
    let a = 0;
    let b = 0;

    for (let i = 0; n > i; ++i) {
        b = Math.max(b, permutation[i] - i);
        a = Math.min(a, permutation[i] - i);
    }

    return b - a;
}
