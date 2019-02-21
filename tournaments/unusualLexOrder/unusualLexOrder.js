function unusualLexOrder(words) {
    const n = words.length;

    for (let i = 0; n > i; ++i) {
        words[i] = [...words[i]].reverse().join('');
    }

    words.sort((a, b) => {if (a > b) return 1; else if (a < b) return -1; else return 0;});

    for (let i = 0; n > i; ++i) {
        words[i] = [...words[i]].reverse().join('');
    }

    return words;
}
