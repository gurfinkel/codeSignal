function toDecimal(k, n) {

    var result = 0;
    var power = 1;

    for (var i = n.length - 1; i >= 0; i--) {
        result += (n[i] - '0') * power;
        power *= k;
    }
  
    return result;
}  
  