function mergeStrings(s1, s2) {
    const aCode = 'a'.charCodeAt();
    const aStore = new Array(26).fill(0);
    const bStore = new Array(26).fill(0);
    const aLength = s1.length;
    const bLength = s2.length;
    const result = new Array(aLength + bLength);
    let aIndex = 0;
    let bIndex = 0;

    for (const letter of s1) ++aStore[letter.charCodeAt() - aCode];
    for (const letter of s2) ++bStore[letter.charCodeAt() - aCode];

    while (aLength > aIndex || bLength > bIndex) {
        let aFreq = 100;
        let bFreq = 100;

        if (aIndex < aLength) aFreq = aStore[s1.charCodeAt(aIndex) - aCode];
        else {
            result.push(s2.substring(bIndex));
            break;
        }

        if (bIndex < bLength) bFreq = bStore[s2.charCodeAt(bIndex) - aCode];
        else {
            result.push(s1.substring(aIndex));
            break;
        }

        if (aFreq < bFreq) result.push(s1[aIndex++]);
        else if (aFreq > bFreq) result.push(s2[bIndex++]);
        else {
            if (s1[aIndex] < s2[bIndex]) result.push(s1[aIndex++]);
            else result.push(s2[bIndex++]);
        }
    }

    return result.join('');
}
