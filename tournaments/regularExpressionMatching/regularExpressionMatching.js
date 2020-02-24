function regularExpressionMatching(s, p) {
    const r = new RegExp(`^${p}$`);
    
    return r.test(s);
}
