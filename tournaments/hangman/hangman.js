function hangman(word, letters) {
    const store = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt();
    let result = 0;
    let a = 0;

    for (const item of word) {
        ++store[item.charCodeAt() - aCode];
    }

    for (const item of letters) {
        if (6 <= a) {
            return false;
        }

        const b = store[item.charCodeAt() - aCode];

        if (!b) {
            ++a;
        } else {
            result += b;
        }
    }

    return word.length === result;
}
