function areaOfIntersection(shape1, shape2) {
    let result = 0;

    for(let i = -1001; 1001 >= i; ++i) {
        for(let j = -1001; 1001 >= j; ++j) {
            if (Math.abs(i - shape1[1]) + Math.abs(j - shape1[2]) < shape1[0]
                && Math.abs(i - shape2[1]) + Math.abs(j - shape2[2]) < shape2[0]) {
                ++result;
            }
        }
    }

    return result;
}
