int candles(int candlesNumber, int makeNew) {
    var result = 0;
    var a = 0;

    while (candlesNumber > 0) {
        result += candlesNumber;
        a += candlesNumber;
        candlesNumber = a / makeNew;
        a %= makeNew;
    }

    return result;
}

