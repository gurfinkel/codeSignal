function isSumOfConsecutive2(n) {
    var result = 0;
    
    for (let i = 1; n > i; ++i) {
        let sum = 0;
        let item = i;
        while (n > sum) {
            sum += item;
            ++item;
        }
        
        if (n === sum) {
            ++result;
        }
    }
    
    return result;
}
