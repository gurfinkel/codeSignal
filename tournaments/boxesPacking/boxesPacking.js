function boxesPacking(length, width, height) {
    let n = length.length;
    let p = Array.from({length: n}, (_, i) => i);
    
    for (let it = 0; n > it; ++it) {
        for (let i = 0; n - 1 > i; ++i) {
            const volumeF = length[p[i]] * width[p[i]] * height[p[i]];
            const volumeS = length[p[i + 1]] * width[p[i + 1]] * height[p[i + 1]];
            
            if (volumeF > volumeS) {
                const tmp = p[i];
                p[i] = p[i + 1];
                p[i + 1] = tmp;
            }
        }
    }
    
    let isCorrectSequence = true;
    
    for (let i = 0; n - 1 > i; ++i) {
        const pi = p[i];
        const pj = p[i + 1];
        let canSwap = false;
        
        canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < length[pj] && width[pi] < width[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < length[pj] && width[pi] < height[pj] && height[pi] < width[pj]);
        canSwap |= (length[pi] < width[pj] && width[pi] < length[pj] && height[pi] < height[pj]);
        canSwap |= (length[pi] < width[pj] && width[pi] < height[pj] && height[pi] < length[pj]);
        canSwap |= (length[pi] < height[pj] && width[pi] < length[pj] && height[pi] < width[pj]);
        canSwap |= (length[pi] < height[pj] && width[pi] < width[pj] && height[pi] < length[pj]);
        
        isCorrectSequence &= canSwap;
    }
    
    return isCorrectSequence ? true : false;
}
