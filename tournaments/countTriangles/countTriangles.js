function countTriangles(x, y) {
    let result = 0;
    
    for (let i = 0; i in x; ++i) {
        for (let j = i + 1; j in x; ++j) {
            for (let k = j + 1; k in x; ++k) {
                if ((x[i] - x[j])*(y[i] - y[k]) !== (x[i] - x[k])*(y[i] - y[j])) {
                    ++result;
                }
            }
        }
    }
    
    return result;
}
