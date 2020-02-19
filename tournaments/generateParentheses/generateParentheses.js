function generateParentheses(n) {
    const result = [];

    if (!n) {
        result.push('');
    } else {
        for (let i = 0; n > i; ++i) {
            for (const left of generateParentheses(i)) {
                for (const right of generateParentheses(n - 1 - i)) {
                    result.push(`(${left})${right}`);
                }
            }
        }
    }

    return result.sort();
}
