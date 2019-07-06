function substitutionCipherDecryption(contents, signature, encryptedSignature) {
    const aCode = 'a'.charCodeAt();
    const abc = [...'abcdefghijklmnopqrstuvwxyz'];
    const newAbc = new Array(26).fill('*');

    for (let i = 0; signature.length > i; ++i) {
        newAbc[signature.charCodeAt(i) - aCode] = encryptedSignature[i];
    }

    let letter = 'a';
    for (let i = 0; 26 > i; ++i) {
        if ('*' === newAbc[i]) {
            while (~newAbc.join('').indexOf(letter)) {
                letter = String.fromCharCode(1 + letter.charCodeAt());
            }
            newAbc[i] = letter;
        }
    }

    const n = contents.length;
    const result = new Array(n);

    for (let i = 0; n > i; ++i) {
        result[i] = abc[newAbc.join('').indexOf(contents[i])];
    }

    return result.join('');
}
