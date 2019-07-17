function reduceString(inputString) {
    const s = [...inputString];
    let a = s[0];
    let b = s[s.length-1];

    while (1 <= s.length && a === b) {
        s.shift();
        s.pop();
        a = s[0];
        b = s[s.length-1];
    }

    return s.join('');
}
