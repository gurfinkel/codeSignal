function dailyIntake(caloricValue) {
    var dp = [],
        l  = caloricValue.length;
    
    f = (i, cal) => {
        if (i == l)
            return [0, 0];
        var dpkey = i << 12 | cal;
        if (dp[dpkey]) return dp[dpkey];
        var [a, maska] = f(i+1, cal),
            [b, maskb] = f(i+1, cal - caloricValue[i]);
        b += caloricValue[i];
        return dp[dpkey] = Math.abs(a - cal) < Math.abs(b - cal) ? [a, maska] : [b, maskb | 1 << i];
    }
    
    var [cal, mask] = f(0, 2000),
        ret = [],
        sum = 0;
    
    for (var i in caloricValue) {
        if (mask & 1 << i) {
            ret.push(+i);
            sum += caloricValue[i];
        }
    }
    return ret;
}
