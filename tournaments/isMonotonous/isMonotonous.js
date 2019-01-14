function isMonotonous(sequence) {
    if (1 === sequence.length) {
        return true;
    }
    
    let direction = sequence[1] - sequence[0];
    
    for (let i = 0; sequence.length - 1 > i; ++i) {
        if (0 >= direction * (sequence[i + 1] - sequence[i])) {
            return false;
        }
    }
    return true;
}
