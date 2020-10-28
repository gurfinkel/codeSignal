function ratingThreshold(threshold, ratings) {
    const result = [];
    
    for (let i = 0; ratings.length > i; ++i) {
        const item = ratings[i];
        const s = item.reduce((a, b) => a + b, 0);
        
        if (threshold > s / item.length) {
            result.push(i);
        }
    }
    
    return result;
}
