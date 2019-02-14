function videoPart(part, total) {

    var getSeconds = function(time) {
        var h = parseInt(time.substring(0, 2)),
            m = parseInt(time.substring(3, 5)),
            s = parseInt(time.substring(6, 8));
        return h * 60 * 60 + m * 60 + s;
    }

    var gcd = function(a, b) {
        while (a > 0) {
            var tmp = a;
            a = b % a;
            b = tmp;
        }
        return b;
    }

    var partTime = getSeconds(part);
    var totalTime = getSeconds(total);
    var divisor = gcd(partTime, totalTime);
    return [partTime / divisor, totalTime / divisor];
}
