int lineUp(string commands) {
    var result = 0;
    var isProperPosition = true;

    for (int i = 0; commands.Length > i; ++i) {
        if (isProperPosition) {
            if ('L' == commands[i] || 'R' == commands[i]) {
                isProperPosition = !isProperPosition;
            } else {
                ++result;
            }
        } else {
            if ('L' == commands[i] || 'R' == commands[i]) {
                isProperPosition = !isProperPosition;
                ++result;
            }
        }
    }

    return result;
}
