function equationTemplate(values) {
    const [a, b, c, d] = [...values];
    
    if (a * b === c * d) return true;
    if (a * c === b * d) return true;
    if (a * d === b * c) return true;
    if (a * b * c === d) return true;
    if (a * b * d === c) return true;
    if (a * c * d === b) return true;
    
    return b * c * d === a;
}
