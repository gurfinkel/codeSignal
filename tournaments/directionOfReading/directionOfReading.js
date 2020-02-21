function directionOfReading(numbers) {
    return numbers.map((r, i) =>
        +numbers.map(v => v / 10 ** i % 10 | 0).join('')
    ).reverse();
}
