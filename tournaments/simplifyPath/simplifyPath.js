function simplifyPath(path) {
    const simple = [];

    for (const dir of path.split('/')) {
        if ('..' === dir)
            simple.pop();
        else if (dir.length && '.' !== dir)
            simple.push(dir);
    }

    return '/' + simple.join('/');
}
