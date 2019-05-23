function isDivisibleBy6(inputString) {
    const result = [];
    for (let i = 0; 10 > i; ++i) {
        const a = inputString.replace('*', i);
        if (!(parseInt(a) % 6))
            result.push(a);
    }
    return result;
}
