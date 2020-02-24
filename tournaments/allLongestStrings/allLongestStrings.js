function allLongestStrings(inputArray) {
    const result = [];

    for (const item of inputArray) {
        if (!result.length || result[0].length === item.length) {
            result.push(item);
        } else if (result[0].length < item.length) {
            result.splice(0, result.length);
            result.push(item);
        }
    }

    return result;
}
