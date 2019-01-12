function unusualDictionary(wordList) {
    a = wordList.map(x => {
        if (x.split(' ').length == 1) return x
        return x.split(' ')[1]
    })

    if (a.join('') != a.sort().join('')) return false
    
    b = {}

    for (i in a) {
        if (!b[a[i]])
            b[a[i]] = []
        b[a[i]].push(wordList[i])
    }

    for (i in b) {
        if (b[i].join('') != b[i].sort().join('')) return false
    }
    
    return true
}
