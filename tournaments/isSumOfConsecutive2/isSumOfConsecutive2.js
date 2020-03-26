function isSumOfConsecutive2(n) {
    let result = 0;

    for (let i = 1; n > i; ++i) {
        let a = 0;
        let b = i;

        while (n > a) a += b++;
        result += n === a;
    }

    return result;
}
