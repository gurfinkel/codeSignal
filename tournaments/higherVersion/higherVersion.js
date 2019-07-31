function higherVersion(ver1, ver2) {
    const a = ver1.split('.');
    const b = ver2.split('.');

    for (let i = 0; a.length > i; ++i)
        if (parseInt(a[i]) > parseInt(b[i]))
            return true;
        else if (parseInt(a[i]) < parseInt(b[i]))
            return false;

    return false;
}
