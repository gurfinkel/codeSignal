string reflectString(string inputString) {
    var result = new StringBuilder();
    
    for (int i = 0; inputString.Length > i; ++i) {
        result.Append((char)('z' - inputString[i] + 'a'));
    }
    
    return result.ToString();
}
