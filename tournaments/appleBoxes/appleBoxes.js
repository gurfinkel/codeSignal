function appleBoxes(k) {
    let result = k * (1 + k) >> 1;
    return (k & 1) ? -result : result;
}
