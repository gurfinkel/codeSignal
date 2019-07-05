string caseUnification(string inputString) {
    var result = new StringBuilder(inputString.Length);
    var l = 0;
    var u = 0;
    
    foreach (var item in inputString) {
        if (char.IsUpper(item)) ++u;
        else ++l;
    }
    
    foreach (var item in inputString) {
        if (u < l) result.Append(char.ToLower(item));
        else result.Append(char.ToUpper(item));
    }
    
    return result.ToString();
}
