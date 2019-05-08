function triangleExistence(sides) {
    const [a, b, c] = [...sides.sort((a, b) => a - b)];
    return a + b >= c;
}
