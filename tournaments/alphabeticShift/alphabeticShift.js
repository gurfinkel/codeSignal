function alphabeticShift(inputString) {
    const n = inputString.length;
    const result = new Array(n);
    const aCode = 'a'.charCodeAt();
    let index = 0;

    for (const letter of inputString) {
        result[index++] = String.fromCharCode(aCode + (letter.charCodeAt() - aCode + 1) % 26);
    }

    return result.join('');
}
