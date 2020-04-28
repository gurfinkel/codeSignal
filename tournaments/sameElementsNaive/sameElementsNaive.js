function sameElementsNaive(a, b) {

    var result = 0;

    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result++;
            }
        }
    }
    return result;
}
