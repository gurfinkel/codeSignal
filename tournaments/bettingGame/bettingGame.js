function bettingGame(l) {
    var s = 0;

    for (var i = 0; i < l.length; i++) {
        s += l[i];
    }
    if (s === 0) {
        return false;
    }

    return s % l.length === 0;
}
