function caesarBoxCipherEncoding(inputString) {

    var n = Math.sqrt(inputString.length);
    var ans = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            ans += inputString[i + j * n];
        }
    }
  
    return ans;
}
    