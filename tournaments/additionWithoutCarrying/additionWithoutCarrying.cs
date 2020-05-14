int additionWithoutCarrying(int param1, int param2) {
    var result = 0;
    var tenPower = 1;

    while (0 < param1 || 0 < param2) {
        result += tenPower * ((param1 % 10 + param2 % 10) % 10);
        param1 /= 10;
        param2 /= 10;
        tenPower *= 10;
    }

    return result;
}
