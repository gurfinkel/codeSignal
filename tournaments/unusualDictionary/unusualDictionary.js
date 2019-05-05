function unusualDictionary(wordList) {
    const a = wordList.map(item => {
        if (1 === item.split(' ').length) return item;
        return item.split(' ')[1];
    });

    if (a.join('') !== a.sort().join('')) return false;

    const b = {};

    for (let i in a) {
        if (!b[a[i]])
            b[a[i]] = [];
        b[a[i]].push(wordList[i]);
    }

    for (let i in b)
        if (b[i].join('') !== b[i].sort().join('')) return false;

    return true;
}
