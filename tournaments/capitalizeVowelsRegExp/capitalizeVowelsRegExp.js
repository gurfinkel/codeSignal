function capitalizeVowelsRegExp(input) {
    const n = input.length;
    const result = new Array(n);

    for (let i = 0; n > i; ++i) {
        if ('a' === input[i]) result.push('A');
        else if ('e' === input[i]) result.push('E');
        else if ('i' === input[i]) result.push('I');
        else if ('o' === input[i]) result.push('O');
        else if ('u' === input[i]) result.push('U');
        else if ('y' === input[i]) result.push('Y');
        else result.push(input[i]);
    }

    return result.join('');
}
