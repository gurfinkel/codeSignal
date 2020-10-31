function taskMaker(source, challengeId) {
    var buggy = [],
        i,
        match;
    for (i of source) {
        if (match = i.match(/\/\/DB (\d+)\/\//)) {
            if (match[1] == challengeId) {
                buggy[buggy.length - 1] = i.replace(match[0], "");
            }
        } else {
            buggy.push(i);
        }
    }
    return buggy;
}
