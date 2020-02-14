function firstNotRepeatingCharacter(s) {
    const result = ['_'];
    const n = s.length;
    const store = {};

    for (let i = n - 1; 0 <= i; --i) {
        if (s[i] in store) {
            ++store[s[i]];
            while (1 < store[result[result.length - 1]]) {
                result.pop();
            }
        } else {
            result.push(s[i]);
            store[s[i]] = 1;
        }
    }
    return result.pop();
}
