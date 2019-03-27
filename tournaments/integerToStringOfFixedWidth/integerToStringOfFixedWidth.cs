string integerToStringOfFixedWidth(int number, int width) {
    var result = new StringBuilder();
    var count = 0;

    while (0 < number && width > count) {
        result.Insert(0, (number % 10).ToString());
        number /= 10;
        ++count;
    }

    return result.ToString().PadLeft(width, '0');
}
