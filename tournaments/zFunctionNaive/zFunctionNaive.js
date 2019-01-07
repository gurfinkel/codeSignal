function zFunctionNaive(s) {
    let result = [];
    
    for (let i = 0; s.length > i; ++i) {
        result.push(0);
        for (let j = i; s.length > j; ++j) {
            if (s[j] === s[result[i]]) {
                ++result[i];
            } else {
                break;
            }
        }
    }
    
    return result;
}
