function halvingSum(n) {
    let result = 0;
    let index = 1;

    while (n >= index) {
        result += ~~(n/index);
        index <<= 1;
    }

    return result;
}
