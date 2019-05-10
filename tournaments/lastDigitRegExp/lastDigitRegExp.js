function lastDigitRegExp(inputString) {
    return inputString.split('').reverse().join().match(/\d/)[0];
}
