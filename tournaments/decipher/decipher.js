function decipher(cipher) {
    let result = '';
    let a = '';

    for (const letter of cipher) {
        a += letter;
        if (97 <= parseInt(a) && 122 >= parseInt(a)) {
            result += String.fromCharCode(a);
            a = '';
        }
    }

    return result;
}
