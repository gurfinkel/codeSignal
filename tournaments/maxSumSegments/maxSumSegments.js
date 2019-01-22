function maxSumSegments(inputArray) {

    var result = [];

    for (var i = 1; i <= inputArray.length; i++) {
        var sum = 0,
            mxSum = 0,
            index = -1;

        for (var j = 0; j < inputArray.length; j++) {
            sum += inputArray[j];
            if (j >= i) {
                sum -= inputArray[j - i];
            }
            if (j >= i - 1 && (index === -1 || sum > mxSum)) {
                mxSum = sum;
                index = j - i + 1;
            }
        }
        result.push(index);
    }

    return result;
}
  