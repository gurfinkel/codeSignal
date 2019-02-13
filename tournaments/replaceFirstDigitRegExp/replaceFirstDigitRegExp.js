function replaceFirstDigitRegExp(input) {
    let digit = input.match(/\d/)[0];
    let result = input.replace(digit, '#');

    return result;
}
