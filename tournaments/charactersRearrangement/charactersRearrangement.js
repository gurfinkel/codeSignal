function charactersRearrangement(string1, string2) {
    const characters1 = string1.split('');
    const characters2 = string2.split('');
    let result = true;

    characters1.sort();
    characters2.sort();

    for (var i = 0; Math.max(characters1.length, characters2.length) > i; ++i) {
        if (characters1[i] !== characters2[i]) {
            result = false;
        }
    }

    return result;
}