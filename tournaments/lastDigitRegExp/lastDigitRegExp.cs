char lastDigitRegExp(string inputString) {
    var index = inputString.Length;
    var result = inputString[--index];
    
    while (0 <= index && !char.IsDigit(result)) {
        result = inputString[--index];
    }
    
    return result;
}
