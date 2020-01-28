function firstNotRepeatingCharacter(s) {
    const n = s.length;
    const store = new Map();
    const previousVariants = [];
    let result = '_';

    for (let i = n - 1; 0 <= i; --i) {
        if (store.has(s[i])) {
            store.set(s[i], 1 + store.get(s[i]));

            if (result === s[i]) {
                while (previousVariants.length && 1 !== store.get(result)) {
                    result = previousVariants.shift();
                }
            }
        } else {
            previousVariants.unshift(result);
            result = s[i];
            store.set(s[i], 1);
        }
    }

    return result;
}
