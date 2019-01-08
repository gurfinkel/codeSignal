string properNounCorrection(string noun) {
    var result = new StringBuilder(noun.Length);
    result.Append(char.ToUpper(noun[0]));
    
    for (int i = 1; noun.Length > i; ++i) {
        result.Append(char.ToLower(noun[i]));
    }
    
    return result.ToString();
}
