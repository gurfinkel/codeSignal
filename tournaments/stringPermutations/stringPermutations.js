function stringPermutations(string) {
    let results = [];
    
    if (string.length === 1) {
        results.push(string);
        return results;
    }
    
    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i];
        let charsLeft = string.substring(0, i) + string.substring(i + 1);
        let innerPermutations = stringPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results.sort().filter((e,i,a)=>a.indexOf(e)==i);
}
