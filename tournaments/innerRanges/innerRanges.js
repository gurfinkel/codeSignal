function innerRanges(nums, l, r) {
    const result = [];
    const format = function(a,b) {
        if (a <= b) {
            result.push(a < b ? `${a}->${b}` : `${a}`);
        }
    }
    
    nums.forEach(n => {
        if (l < n) {
            format(l, n - 1);
        }
        
        l = 1 + n;
    });
    
    format(l, r);
    
    return result;
}
