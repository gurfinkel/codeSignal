function isPermutation(n, inputArray) {
    return inputArray.sort((a, b) => a - b).join('') === Array.from(Array(1 + n).keys()).splice(1).join('');
}

function isPermutation(n, inputArray) {

    var countOccurences = [];
  
    for (var i = 0; i < n; i++) {
        countOccurences.push(0);
    }
  
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] - 1 < 0 || inputArray[i] - 1 >= n) {
            return false;
        }
        countOccurences[ inputArray[i] - 1 ]++;
    }
  
    for (var i = 0; i < n; i++) {
        if (countOccurences[i] !== 1) {
            return  false ;
        }
    }
    return true;
}
    