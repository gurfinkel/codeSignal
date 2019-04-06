function charactersRearrangement(string1, string2) {
    return [...string1].sort().join('') === [...string2].sort().join('');
}
