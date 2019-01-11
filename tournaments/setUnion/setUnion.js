function setUnion(a, b) {

    var compareNumbers = function(a, b) {
        return a - b;
    }
  
    var c = [];
    var pos_b = 0;
  
    a.sort(compareNumbers);
    b.sort(compareNumbers);
  
    for (var pos_a = 0; pos_a < a.length; pos_a++) {
        while (pos_b < b.length && b[pos_b] < a[pos_a]) {
            c.push(b[pos_b]);
            pos_b++;
        }
        c.push(a[pos_a]);
        if (a[pos_a] === b[pos_b]) {
            pos_b++;
        }
    }
    while (pos_b < b.length) {
        c.push(b[pos_b]);
        pos_b++;
    }
  
    return c;
}
    