function prefixSums(a) {
    const result = Array(a.length + 1).fill(0);
    
    a.forEach((item, idx) => result[idx + 1] = result[idx] + item);
    
    return result.splice(1);
}
