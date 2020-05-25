function mergeStrings(s1, s2) {
    const aCode = 'a'.charCodeAt();
    const aStore = Array(26).fill(0);
    const bStore = Array(26).fill(0);
    const aLen = s1.length;
    const bLen = s2.length;
    const result = Array(aLen + bLen);
    let aIdx = 0;
    let bIdx = 0;

    for (const letter of s1) ++aStore[letter.charCodeAt() - aCode];
    for (const letter of s2) ++bStore[letter.charCodeAt() - aCode];

    while (aLen > aIdx || bLen > bIdx) {
        let aFreq = 100;
        let bFreq = 100;

        if (aIdx < aLen) aFreq = aStore[s1.charCodeAt(aIdx) - aCode];
        else {
            result.push(s2.substring(bIdx));
            break;
        }

        if (bIdx < bLen) bFreq = bStore[s2.charCodeAt(bIdx) - aCode];
        else {
            result.push(s1.substring(aIdx));
            break;
        }

        if (aFreq < bFreq) result.push(s1[aIdx++]);
        else if (aFreq > bFreq) result.push(s2[bIdx++]);
        else {
            if (s1[aIdx] <= s2[bIdx])
                result.push(s1[aIdx++]);
            else
                result.push(s2[bIdx++]);
        }
    }

    return result.join('');
}
