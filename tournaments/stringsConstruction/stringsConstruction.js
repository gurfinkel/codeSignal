function stringsConstruction(a, b) {
    const aStore = Array(26).fill(0);
    const bStore = Array(26).fill(0);
    let result = Number.MAX_SAFE_INTEGER;

    for (const letter of a) {
        ++aStore[letter.charCodeAt() % 26];
    }

    for (const letter of b) {
        ++bStore[letter.charCodeAt() % 26];
    }

    for (const letter of a) {
        const aCount = aStore[letter.charCodeAt() % 26];
        const bCount = bStore[letter.charCodeAt() % 26];

        if (aCount > bCount) {
            return 0;
        } else {
            result = Math.min(result, ~~(bCount / aCount));
        }
    }

    return result;
}
