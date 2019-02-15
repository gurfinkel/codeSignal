function lastDigitRegExp(inputString) {
    const a = inputString.split('').reverse().join();

    return a.match(/\d/)[0];
}
