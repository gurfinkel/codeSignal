function coolString(inputString) {

    var isLowercase = function(symbol) {
        if ('a' <= symbol && symbol <= 'z') {
            return true;
        }
        return false;
    }
  
    var isUppercase = function(symbol) {
        if ('A' <= symbol && symbol <= 'Z') {
            return true;
        }
        return false;
    }
  
    var firstIsLowercase = isLowercase(inputString[0]);
    var firstIsUppercase = isUppercase(inputString[0]);
  
    if (!(firstIsLowercase || firstIsUppercase)) {
        return false;
    }
  
    for (var i = 1; i < inputString.length; i++) {
        if (i % 2) {
            if (isLowercase(inputString[i]) === firstIsLowercase ||
                isUppercase(inputString[i]) === firstIsUppercase) {
                return false;
            }
        }
        else {
            if (isLowercase(inputString[i]) !== firstIsLowercase ||
                isUppercase(inputString[i]) !== firstIsUppercase) {
                return false;
            }
        }
    }
  
    return true;
}
    