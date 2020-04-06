function combinationSum(a, sum, start = 0, hash = 0, memo = new Set()) {
    if(start === 0) a.sort();

    if(sum === 0) {
        const result = [];

        if(!memo.has(hash)) result.push([]);

        memo.add(hash);
        return result;
    }

    const results = [];

    for(let i = start; i < a.length; i++) {
        const num = a[i];

        if(num <= sum) {
            const nextHash = (10 * hash + num) % (1e9 + 7);
            const output = combinationSum(a, sum - num, i, nextHash, memo);
            results.push(...output.map(arr => [num, ...arr]));
        }
    }

    if(hash) return results;
    return results.length ? results.map(arr => `(${arr.join(` `)})`).join`` : "Empty";
}
