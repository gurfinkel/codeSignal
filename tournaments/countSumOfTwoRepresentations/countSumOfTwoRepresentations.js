function countSumOfTwoRepresentations(n, l, r) {
    let result = 0;

    for (let i = l; r >= i; ++i)
        for (let j = i; r >= j; ++j)
            if (n === i + j)
                ++result;

    return result;
}
