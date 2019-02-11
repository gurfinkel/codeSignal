function arrayMinimumAboveBound(inputArray, bound) {
    let result = Number.MAX_VALUE;

    for (const item of inputArray) {
        if (bound < item && result > item) {
            result = item;
        }
    }

    return result;
}
