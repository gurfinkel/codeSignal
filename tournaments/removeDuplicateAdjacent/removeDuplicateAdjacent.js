function removeDuplicateAdjacent(s) {
    const r = /(.)\1+/g;
    
    while (r.test(s)) {
        s = s.replace(r, '');
    }
    
    return s;
}
