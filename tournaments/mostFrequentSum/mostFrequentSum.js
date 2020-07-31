//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function mostFrequentSum(t) {
    if (!t) return [];
    
    const sums = traverse(t).sums;
    
    const mostFrequent = new Set();
    let maxFrequency = 0;
    
    for (const sum in sums) {
        const frequency = sums[sum];
        
        if (frequency > maxFrequency) {
            mostFrequent.clear();
            maxFrequency = frequency;
        }
        
        if (frequency === maxFrequency) {
            mostFrequent.add(parseInt(sum));
        }
    }
    
    return [...mostFrequent].sort((a, b) => a - b);
}

function mostFrequentSumBFS(t) {
    if (!t) return [];
    
    const queue = [[t, [t]]];
    const sums = new Map();
    
    while (queue.length) {
        const [node, parents] = queue.shift();
        
        for (const parent of parents) {
            sums.set(parent, (sums.has(parent) ? sums.get(parent) : 0) + node.value);
        }
        
        if (node.left) queue.push([node.left, [...parents, node.left]]);
        if (node.right) queue.push([node.right, [...parents, node.right]]);
    }
    
    const freqs = {};
    
    for (const [subTree, sum] of sums) {
        if (!(sum in freqs)) freqs[sum] = 0;
        ++freqs[sum];
    }
    
    const maxFreq = Math.max(...Object.values(freqs));
    const mostFrequents = [];
    
    for (const sum in freqs) {
        if (freqs[sum] == maxFreq) mostFrequents.push(parseInt(sum));
    }
    
    return mostFrequents.sort((a, b) => a - b);
}

function traverse(node, sums = {}) {
    if (!node) return {sum: 0, sums: {}};
    
    let sum = node.value;
    
    if (node.left) sum += traverse(node.left, sums).sum;
    if (node.right) sum += traverse(node.right, sums).sum;
    
    sums[sum] = (sums[sum] || 0) + 1;
    
    return {sum, sums};
}
