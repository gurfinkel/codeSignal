function reverseToSort(inputArray) {

    for (var i = 0; i < inputArray.length; i++) {
        for (var j = i + 1; j <= inputArray.length; j++) {
            var left = inputArray.slice(0, i),
                middle = inputArray.slice(i, j).reverse(),
                right = inputArray.slice(j, inputArray.length),
                result = [],
                correct = true;
    
            result = left.concat(middle.concat(right));
    
            for (var k = 1; k < result.length; k++) {
                if (result[k - 1] >= result[k]) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                return true;
            }
        }
    }
    return false;
} 
  