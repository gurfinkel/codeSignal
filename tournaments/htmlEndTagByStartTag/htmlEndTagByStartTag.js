function htmlEndTagByStartTag(startTag) {
    const result = ['</'];
    let a = 1;

    while (' ' !== startTag[a] && '>' !== startTag[a])
        result.push(startTag[a++]);

    result.push('>');

    return result.join('');
}
  