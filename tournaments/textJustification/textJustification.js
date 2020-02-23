function textJustification(words, maxWidth) {
    const res = [];
    const sb = new Array(maxWidth);
    
    let left = 0;
    let right = 0;
    let sumLength = 0;
    
    while (left !== words.length) {
        if (right < words.length && sumLength < maxWidth) {
            sumLength += words[right++].length;
            continue;
        }
        
        let wordsCount = right - left;
        let minSpacesCount = wordsCount - 1;
        
        while (sumLength + minSpacesCount > maxWidth) {
            sumLength -= words[--right].length;
            wordsCount = right - left;
            minSpacesCount = wordsCount - 1;
        }
        
        var remainingSpaces = maxWidth - (sumLength + minSpacesCount);
        sb.splice(0, sb.length);
        
        if (right === words.length || wordsCount === 1) {
            for (let i = left; i < right; i++) {
                sb.push(words[i]);
                if (i !== right - 1) {
                    sb.push(' ');
                }
            }
            sb.push(' '.repeat(remainingSpaces));
        } else {
            let allSpaces = minSpacesCount + remainingSpaces;
            let mod = allSpaces % minSpacesCount;
            let commonSpaceCount = allSpaces / minSpacesCount;
            
            for (let i = left; i < right; i++) {
                sb.push(words[i]);
                if (i !== right - 1) {
                    sb.push(' '.repeat(commonSpaceCount));
                    if (mod) {
                        sb.push(' ');
                        --mod;
                    }
                }
            }
        }
        
        let newStr = sb.join('');
        res.push(newStr);
        
        left = right;
        sumLength = 0;
    }
    
    return res;
}
