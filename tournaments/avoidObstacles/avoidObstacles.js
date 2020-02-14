function avoidObstacles(inputArray) {
    let result = 0;

    while (++result) {
        if (inputArray.every(item => item % result)) {
            return result;
        }
    }
}
