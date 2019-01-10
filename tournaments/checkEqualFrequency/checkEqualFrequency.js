function checkEqualFrequency(inputArray) {

    var numberOfEqual = 1;
  
    inputArray.sort();
  
    while (numberOfEqual < inputArray.length
        && inputArray[numberOfEqual - 1] === inputArray[numberOfEqual]) {
      numberOfEqual++;
    }
  
    if (inputArray.length % numberOfEqual) {
      return false;
    }
  
    for (var i = 0; i < inputArray.length; i += numberOfEqual) {
      if (i && inputArray[i] === inputArray[i - 1]) {
        return false;
      }
      for (var j = i + 1;  j < numberOfEqual + i; j++) {
        if (inputArray[j] !== inputArray[j - 1]) {
          return false;
        }
      }
    }
  
    return true;
}  
  