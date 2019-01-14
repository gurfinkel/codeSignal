function alphabetSubsequence(s) {

    for (var i = 1; i < s.length; i++) {
        if (s[i].charCodeAt() < s[i - 1].charCodeAt() + 1) {
            return false;
        }
    }
    
    return true;
}
  