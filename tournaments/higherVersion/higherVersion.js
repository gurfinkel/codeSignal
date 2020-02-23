function higherVersion(ver1, ver2) {
    const [a, b] = [ver1, ver2].map(ver => ver.split('.'));
    
    for (let i = 0; i in a; ++i) {
        if (+a[i] > +b[i]) {
            return true;
        } else if (+a[i] < +b[i]) {
            return false;
        }
    }
    
    return false;
}
