function isTandemRepeat(inputString) {
    if (inputString.length & 1) {
        return false;
    }

    for (let i = 0; (inputString.length >> 1) > i; ++i) {
        if (inputString[i] !== inputString[(inputString.length >> 1) + i]) {
            return false;
        }
    }

    return true;
}
