function quickSort(a, l, r) {

    if (l >= r) {
        return a;
    }
  
    var x = a[l];
    var i = l;
    var j = r;
  
    while (i <= j) {
        while (a[i] < x) {
            i++;
        }
        while (a[j] > x) {
            j--;
        }
        if (i <= j) {
            [a[i], a[j]] = [a[j], a[i]];
            i++;
            j--;
        }
    }
  
    quickSort(a, l, j);
    quickSort(a, i, r);
  
    return a;
}
    