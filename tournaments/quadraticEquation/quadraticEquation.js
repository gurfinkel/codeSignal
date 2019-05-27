function quadraticEquation(a, b, c) {
    const discriminant =  b ** 2 - 4 * a * c;

    if (0 > discriminant) {
         return [];
    }

    if (!discriminant) {
        return [-b / (2 * a)];
    }

    const result = new Array(2);
    result[0] = ((-b - Math.sqrt(discriminant)) / (2 * a));
    result[1] = ((-b + Math.sqrt(discriminant)) / (2 * a));

    if (result[0] > result[1]) {
        [result[0], result[1]] = [result[1], result[0]];
    }

    return result;
}
