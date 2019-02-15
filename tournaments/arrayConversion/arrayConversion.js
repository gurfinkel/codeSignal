function arrayConversion(inputArray) {

    var operation = 1;
    while (inputArray.length > 1) {
        var newArray = [];
        for (var i = 0; i < inputArray.length; i += 2) {
            if (operation % 2 === 1) {
                newArray.push(inputArray[i] + inputArray[i + 1]);
            }
            else {
                newArray.push(inputArray[i] * inputArray[i + 1]);
            }
        }
        inputArray = newArray.slice();
        operation++;
    }

    return inputArray[0];
}
