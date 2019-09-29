function waterTubes(water, flowPerMinute) {
    let result = 0;
    
    for (let i = 0; water.length > i; ++i) {
        let minutes = ~~(water[i] / flowPerMinute[i]);
        
        if (water[i] % flowPerMinute[i])
            ++minutes;
        if (result < minutes)
            result = minutes;
    }
    
    return result;
}
