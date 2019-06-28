function smallestUnusualNumber(a) {
    const isUnusual = function(s) {
        const n = s.length;
        let index = 0;
        let sumOfOnes = 0;
        let sumOfRest = 0;
        let mulOfRest = 1;

        while ((mulOfRest - sumOfRest - sumOfOnes) < n && index < n) {
            const item = s[index++];
            if (1 === (item.charCodeAt() - zeroCode)) ++sumOfOnes;
            else {
                sumOfRest += (item.charCodeAt() - zeroCode);
                mulOfRest *= (item.charCodeAt() - zeroCode);
            }
        }

        return (1 >= n - sumOfOnes || (sumOfOnes + sumOfRest) > mulOfRest);
    };

    const zeroCode = '0'.charCodeAt();
    const len = a.length;

    if (1 === len) return 10 - (a.charCodeAt(0) - zeroCode);
    if (~a.indexOf('0') || isUnusual(a)) return 0;
    return 10 - (a.charCodeAt(len - 1) - zeroCode);
}
