function isPangram(sentence) {
    const lCode = 'a'.charCodeAt();
    const uCode = 'A'.charCodeAt();
    const store = new Array(26).fill(0);

    for (const item of sentence)
        if ('a' <= item && 'z' >= item) store[item.charCodeAt() - lCode] = 1;
        else if ('A' <= item && 'Z' >= item) store[item.charCodeAt() - uCode] = 1;

    for (const item of store)
        if (!item)
            return false;

    return true;
}
