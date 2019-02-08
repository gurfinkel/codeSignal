int champernowneDigit(int n) {
    var result= new StringBuilder();

    for (var i = 0; n >= i; ++i) {
        result.Append(i);
    }

    return result[n] - '0';
}
