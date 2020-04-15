function regexMatching(pattern, test) {
    return !!~test.indexOf(pattern.replace(/\^|\$/, ''));
}
