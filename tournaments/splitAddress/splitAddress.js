function splitAddress(address) {
    const result = [];
    const tokens = address.split('/');

    result.push(tokens[0].substring(0, tokens[0].length - 1));
    result.push(tokens[2].split('.')[0]);

    if (tokens[3]) {
        result.push(tokens[3]);
    }

    return result;
}
