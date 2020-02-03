function higherVersion2(ver1, ver2) {
    const a = ver1.split('.');
    const b = ver2.split('.');

    for (let i = 0; a.length > i; ++i) {
        if (+a[i] > +b[i]) {
            return 1;
        } else if (+a[i] < +b[i]) {
            return -1;
        }
    }

    return 0;
}
