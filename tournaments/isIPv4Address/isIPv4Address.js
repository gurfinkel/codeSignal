function isIPv4Address(inputString) {
    let currentNumber = 0;
    let emptyField = true;
    let countNumbers = 0;
  
    inputString += '.';
  
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '.') {
            if (emptyField) {
                return false;
            }

            ++countNumbers;
            currentNumber = 0;
            emptyField = true;
        }
        else {
            var digit = inputString.charCodeAt(i) - '0'.charCodeAt(0);

            if (digit < 0 || digit > 9) {
                return false;
            }

            emptyField = false;
            currentNumber = currentNumber * 10 + digit;

            if (currentNumber > 255) {
                return false;
            }
        }
    }
    
    return countNumbers === 4;
}
  