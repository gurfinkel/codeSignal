function closestCommonParent(files, parents, file1, file2) {
    // it's O(n) algo.
    // build dictionary from file-parent key-value pairs.
    // build stack from file to top level (-1) and step back until the parents has common name.
    var dictparents = {},
        file1stack = [],
        file1level = 0,
        file2stack = [],
        file2level = 0;
    
    for (var i = 0; i < files.length; i++)
        dictparents[files[i]] = parents[i];
    
    while (file1 != -1) {
        file1stack.push(file1);
        file1level++;
        file1 = dictparents[file1];
    }
    while (file2 != -1) {
        file2stack.push(file2);
        file2level++;
        file2 = dictparents[file2];
    }
    
    while (file1stack[file1level - 1] == file2stack[file2level - 1]) {
        file1level--;
        file2level--;
    }
    return file1stack[file1level];
}
