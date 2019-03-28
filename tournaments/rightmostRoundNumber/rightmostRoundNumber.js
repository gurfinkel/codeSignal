function rightmostRoundNumber(inputArray) {
    for (let i = inputArray.length-1; 0 <= i; --i)
        if (!(inputArray[i] % 10)) return i;

    return -1;
}
