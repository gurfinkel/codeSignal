function alternatingSort(a) {
    const n = a.length;
    let index = 1;
    let item = a[0];

    for (let i = 0; n - 1 > i; ++i) {
        if (i&1) {
            if (item >= a[index]) return false;
            item = a[index++];
        } else {
            if (item >= a[n - index]) return false;
            item = a[n - index];
        }
    }

    return true;
}
