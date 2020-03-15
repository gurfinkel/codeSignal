function treeLevelSum(tree, k) {
    let l = tree.length;
    let r = 0;
    let level = -1;
    let ans = 0;
    let num = 0;
    
    while (l > r) {
        if (tree[r] === '(') {
            ans += num;
            num = 0;
            ++level;
        } else if (tree[r] === ')') {
            --level;
            ans += num;
            num = 0;
        } else if (k === level) {
            num = +tree[r] + num * 10;
        }
        ++r;
    }
    
    return ans;
}
