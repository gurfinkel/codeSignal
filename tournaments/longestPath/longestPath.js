function longestPath(fileSystem) {
    let path = ''
    let depth = 0
    let longest = 0

    const items = fileSystem.split('\f')
    for (let i = 0; i < items.length; i++) {
        let d = items[i].split('\t')

        if (d.length > depth && depth > 0)
            path += '/'
        else {
            let arr = path.split('/')
            for (let j = 0; j < (depth - d.length) + 1; j++)
                arr.pop()
            path = arr.join('/')
            if (d.length > 1) path += '/'
        }

        depth = d.length
        path += d.pop()

        if (/\.[^\.]+$/.test(path) && path.length > longest)
            longest = path.length
    }

    return longest
}
