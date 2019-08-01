function ballsDistribution(colors, ballsPerColor, boxSize) {
    let result = 0;
    let a = 0;
    let b = boxSize;

    for (let i = 0; colors > i; ++i) {
        let c = a;
        for (let j = 0; ballsPerColor > j; ++j) {
            --b;
            if (!b) {
                b = boxSize;
                ++a;
            }
        }
        if (c < a && (boxSize > b || c + 1 < a)) ++result;
    }

    return result;
}
