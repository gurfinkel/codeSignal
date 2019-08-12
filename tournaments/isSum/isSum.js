function isSum(value) {
    let result = 0;
    let a = 1;

    while (value > result)
        result += a++;

    return value === result;
}
