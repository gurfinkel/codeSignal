function longestWord(text) {
    const words = text.match(/[A-Za-z]+/g);
    let result = '';

    for (const word of words)
        if (result.length < word.length)
            result = word;

    return result;
}
