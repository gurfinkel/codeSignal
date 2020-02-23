function exerciseElaboration(p, n) {
    const getSum = function(n) {
        let result = 0;
        
        while (n) {
            result += (n%10);
            n = ~~(n/10);
        }
        
        return result;
    };
    
    let test = 10 * p + p;
    
    if (n) {
        test = 100 * p + p;
    }
    
    test *= test;
    
    return getSum(test);
}
