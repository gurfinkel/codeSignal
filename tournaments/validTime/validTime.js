function validTime(time) {

    var charToInt = function(symbol) {
        return symbol.charCodeAt() - '0'.charCodeAt();
    }
  
    var hours = charToInt(time[0]) * 10 + charToInt(time[1]), 
        minutes = charToInt(time[3]) * 10 + charToInt(time[4]);
  
    if (24 > hours && 60 > minutes) {
        return true;
    }
    
    return false;
}
    