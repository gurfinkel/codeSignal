function caseUnification(inputString) {
    let a = 0;

    for (const item of inputString) {
        if ('a' <= item && 'z' >= item) ++a;
        else --a;
    }

    return 0 < a ? inputString.toLowerCase() : inputString.toUpperCase();
}
