function nontransitiveDice(dice) {
    const C = function(a, b) {
        let n = 0;
        a.map(x => b.map(y => n += (x > y) - (x < y)));
        return (n > 0) - (0 > n);
    };
    const [a,b,c] = [...dice];
    
    return !!(C(a,b) - C(a,c) & C(b,a) - C(b,c) & C(c,a) - C(c,b));
}
