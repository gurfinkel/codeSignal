function lineEncoding(s) {

    s += '#';
    var cnt = 1;
    var result = [];
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i - 1)) {
            cnt++;
        } else {
            if (cnt > 1) {
                result.push(cnt);
            }
            cnt = 1;
            result.push(s[i - 1]);
        }
    }
  
    return result.join('');
}
