function isLucky(n) {
    const s = [...n.toString()].map(item => parseInt(item));
    return s.slice(0, s.length/2).reduce((a, b) => a+b, 0) === s.slice(s.length/2).reduce((a, b) => a+b, 0);
}
