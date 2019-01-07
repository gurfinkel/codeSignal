function combs(comb1, comb2) {
    var getMask = function(comb) {
        var mask = 0;
        for (var i = 0; i < comb.length; i++) {
            var c = comb[i];
            mask = (mask << 1) + (c === '*');
        }

        return mask;
    };
  
    var m1 = getMask(comb1);
    var m2 = getMask(comb2);
    var len1 = comb1.length;
    var len2 = comb2.length;
    var answer = len1 + len2;
    for (var i = -len1; i <= len2; i++) {
        var tmp, length;
        if (i < 0) {
            tmp = m2 << (-i) & m1;
            length = Math.max(-i + len2, len1);
        } else {
            tmp = m1 << i & m2;
            length = Math.max(i + len1, len2);
        }
        if (tmp === 0 && answer > length) {
            answer = length;
        }
    }
  
    return answer;
}  
  