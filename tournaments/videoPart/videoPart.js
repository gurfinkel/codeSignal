function videoPart(part, total) {
    const getSeconds = function(time) {
        const h = +time.slice(0, 2);
        const m = +time.slice(3, 5);
        const s = +time.slice(6, 8);

        return 60 * 60 * h + 60 * m + s;
    };

    const getGcd = function(a, b) {
        if (!a) {
            return b;
        }

        return getGcd(b % a, a);
    };

    const partSeconds = getSeconds(part);
    const totalSeconds = getSeconds(total);
    const gcd = getGcd(partSeconds, totalSeconds);

    return [partSeconds / gcd, totalSeconds / gcd];
}
