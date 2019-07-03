function newNumeralSystem(number) {
    const result = [];
    const aCode = 'A'.charCodeAt();
    let a = 0;
    let b = number.charCodeAt() - aCode;

    while (a <= b) {
        result.push(`${String.fromCharCode(aCode + a)} + ${String.fromCharCode(aCode + b)}`);
        ++a;
        --b;
    }

    return result;
}
