function isMAC48Address(inputString) {

    for (var i = 0; i < inputString.length; i++) {
        if (i % 3 === 2) {
            if (inputString[i] !== '-') {
            return false;
            }
        }
        else {
            var sym = inputString[i];
            if (!('0' <= sym && sym <= '9' || 'A' <= sym && sym <= 'F')) {
            return false;
            }
        }
    }
  
    return inputString.length === 17;
}
    