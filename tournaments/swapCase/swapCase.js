function swapCase(text) {
    const n = text.length;
    const result = [];

    for (const item of text) {
        if ('A' <= item && 'Z' >= item) {
            result.push(String.fromCharCode(item.charCodeAt() - 'A'.charCodeAt() + 'a'.charCodeAt()));
        } else {
            result.push(String.fromCharCode(item.charCodeAt() - 'a'.charCodeAt() + 'A'.charCodeAt()));
        }
    }

    return result.join('');
}
