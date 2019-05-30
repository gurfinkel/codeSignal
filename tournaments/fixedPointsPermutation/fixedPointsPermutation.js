function fixedPointsPermutation(permutation) {
    let result = 0;

    for (let i = 0; permutation.length > i; ++i) {
        if (permutation[i] === i + 1) ++result;
    }

    return result;
}
