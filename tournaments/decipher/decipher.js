function decipher(cipher) {
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);
    const result = [];
    const store = [];

    for (const letter of cipher) {
        store.push(letter);
        const curr = +store.join('');

        if (aCode <= curr && zCode >= curr) {
            result.push(String.fromCharCode(curr));
            store.splice(0, store.length);
        }
    }
    return result.join('');
}
