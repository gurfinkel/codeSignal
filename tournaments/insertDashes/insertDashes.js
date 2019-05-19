function insertDashes(inputString) {
    const words = inputString.split(' ');

    for (let i = 0; words.length > i; ++i) {
        words[i] = [...words[i]].join('-');
    }

    return words.join(' ');
}
