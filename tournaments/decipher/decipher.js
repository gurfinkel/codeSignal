function decipher(cipher) {
    
    var result = '';
    for (var i = 0; i < cipher.length; ) {
        var len;
        if (cipher[i] === '1') {
            len = 3;
        } else {
            len = 2;
        }
        var code = parseInt(cipher.substring(i, i + len));
        result += String.fromCharCode(code);
        i += len;
    }
    
    return result;
}
