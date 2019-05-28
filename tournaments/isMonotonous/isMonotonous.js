function isMonotonous(sequence) {
    const n = sequence.length;

    if (1 === n) return true;
    
    const a = sequence[1] - sequence[0];
    
    for (let i = 0; n - 1 > i; ++i)
        if (0 >= a * (sequence[i + 1] - sequence[i]))
            return false;

    return true;
}
