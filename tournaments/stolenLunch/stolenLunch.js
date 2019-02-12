function stolenLunch(note) {
    const result = [];

    for (const item of note) {
        if ('0' <= item && item <= '9') {
            result.push(String.fromCharCode(item.charCodeAt(0) - '0'.charCodeAt(0) + 'a'.charCodeAt(0)));
        } else if ('a' <= item && item <= 'j') {
            result.push(item.charCodeAt(0) - 'a'.charCodeAt(0));
        } else {
            result.push(item);
        }
    }

    return result.join('');
}
