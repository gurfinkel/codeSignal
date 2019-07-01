function equationSolutions(l, r) {
    let result = 0;

    for (let a = l; r >= a; ++a)
        for (let b = l; r >= b; ++b)
            if (a**3 === b**2) ++result;

    return result;
}
