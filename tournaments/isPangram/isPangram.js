function isPangram(sentence) {
    var found = [],
        result = true;
        
    for (var i = 0; i < 26; i++) {
        found.push(false);
    }
    for (var i = 0; i < sentence.length; i++) {
        var code = sentence.charCodeAt(i);
        if ('A'.charCodeAt(0) <= code && code <= 'Z'.charCodeAt(0)) {
            code += 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
        }
        if ('a'.charCodeAt(0) <= code && code <= 'z'.charCodeAt(0)) {
            found[code - 'a'.charCodeAt(0)] = true;
        }
    }
  
    for (var i = 0; i < 26; i++) {
        if (!found[i]) {
            result = false;
        }
    }
  
    return result;
}
    