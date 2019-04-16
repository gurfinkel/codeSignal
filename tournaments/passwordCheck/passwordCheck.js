function passwordCheck(inputString) {
    if (5 > inputString.length) return false;
    let d = 0;
    let l = 0;
    let u = 0;
    for (const item of inputString) {
        if ('0' <= item && '9' >= item) ++d;
        else if ('a' <= item && 'z' >= item) ++l;
        else if ('A' <= item && 'Z' >= item) ++u;
    }
    return d && l && u;
}
