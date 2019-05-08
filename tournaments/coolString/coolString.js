function coolString(inputString) {
    const isLower = function(s) {
        return 'a' <= s && s <= 'z';
    };

    const isUpper = function(s) {
        return 'A' <= s && s <= 'Z';
    };

    let a = isLower(inputString[0]);
    let b = isUpper(inputString[0]);

    if (!(a || b)) return false;

    for (let i = 1; inputString.length > i; ++i) {
        if (i % 2) {
            if (isLower(inputString[i]) === a || isUpper(inputString[i]) === b) return false;
        }
        else if (isLower(inputString[i]) !== a || isUpper(inputString[i]) !== b) return false;
    }

    return true;
}
