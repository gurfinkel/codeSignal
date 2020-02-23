function isCryptSolution(crypt, solution) {
    const getNumber = function(s, a) {
        if (1 < s.length && !(a[s[0].charCodeAt(0) - aCode])) {
            return -1;
        }
        
        let result = 0;
        
        for (const letter of s) {
            result = 10 * result + a[letter.charCodeAt(0) - aCode];
        }
        
        return result;
    };
    
    const aCode = 'A'.charCodeAt(0);
    const zeroCode = '0'.charCodeAt(0);
    const store = Array(26).fill(0);
    
    for (const item of solution) {
        store[item[0].charCodeAt(0) - aCode] = item[1].charCodeAt(0) - zeroCode;
    }
    
    const a = getNumber(crypt[0], store);
    const b = getNumber(crypt[1], store);
    const c = getNumber(crypt[2], store);
    
    if (-1 === a || -1 === b || -1 === c) {
        return false;
    }
    
    return a + b === c;
}
