int excelSheetColumnNumber(string s) {
    int total = 0;

    foreach(char c in s) {
        total *= 26;
        int val = c - 'A' + 1;
        total += val;
    }

    return total;
}
