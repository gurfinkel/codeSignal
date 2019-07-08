function theJanitor(word) {
    const result = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt();

    for (const item of word)
        result[item.charCodeAt() - aCode] = 1 + word.lastIndexOf(item) - word.indexOf(item);

    return result;
}
