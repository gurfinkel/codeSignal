function pressingButtons(buttons) {
    const genStrings = function(currentArr, index, len, buttons, map){
        const n = currentArr.length;
        const next = [];
        let temp = '';
        
        if(index === len) return currentArr;
        
        for (let i = 0; n > i; ++i) {
            for (let j = 0; map[buttons.charAt(index)].length > j; ++j) {
                temp = currentArr[i] + map[buttons.charAt(index)][j];
                next.push(temp);
            }
        }
        
        return genStrings(next, index+1, len, buttons, map);
    };
    
    const n = buttons.length;
    const result = [];
    const store = {
        '1': [''],
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n','o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };
    
    if(n === 0) return result;
    
    return genStrings([''], 0, n, buttons, store);
}
