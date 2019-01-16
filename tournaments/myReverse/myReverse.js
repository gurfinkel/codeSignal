function myReverse(input) {

    for (var i = 0; i * 2 < input.length; i++) {
        var tmp = input[i];
        input[i] = input[input.length - i - 1];
        input[input.length - i - 1] = tmp;
    }
    
    return input;
 }
  