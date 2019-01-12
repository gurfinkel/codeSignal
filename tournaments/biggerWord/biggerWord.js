function biggerWord(w) {

    swap = function(w, i, j) {
        if (i === j) {
            return w;
        }
        return w.substr(0, i) + w.charAt(j) +
            w.substr(i + 1, j - i - 1) + w.charAt(i) +
            w.substr(j + 1);
    }
  
    var leftSwap = -1;
    for (var i = w.length - 2; i >= 0; i--) {
        if (w.charCodeAt(i) < w.charCodeAt(i + 1)) {
            leftSwap = i;
            break;
        }
    }
    if (leftSwap === -1) {
        return 'no answer';
    }
  
    var rightSwap = w.length - 1;
    while (w.charCodeAt(leftSwap) >= w.charCodeAt(rightSwap)) {
        rightSwap--;
    }
  
    w = swap(w, leftSwap++, rightSwap);
    rightSwap = w.length - 1;
    while (leftSwap < rightSwap) {
        w = swap(w, leftSwap++, rightSwap--);
    }
    
    return w;
}
    