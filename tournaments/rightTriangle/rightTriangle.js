function rightTriangle(sides) {
    const [a, b, c] = [...sides.map(item => item * item)];

    return a === b + c || b === a + c || c === b + a;
}
