function isDivisibleBy6(inputString) {

    var digitSum = 0;
        leftBound = '0'.charCodeAt(),
        rightBound = '9'.charCodeAt(),
        answer = [],
        mask = inputString.split(''),
        asteriskPos = -1;
  
    for (var i = 0; i < mask.length; i++) {
        if (leftBound <= mask[i].charCodeAt() && mask[i].charCodeAt() <= rightBound) {
            digitSum += mask[i].charCodeAt() - leftBound;
        }
        else {
            asteriskPos = i;
        }
    }
  
    for (var i = 0; i < 10; i++) {
        if ((digitSum + i) % 3 === 0) {
            mask[asteriskPos] = String.fromCharCode(leftBound + i);
            if ((mask[mask.length - 1].charCodeAt() - leftBound) % 2 === 0) {
                answer.push(mask.join(''));
            }
        }
    }
  
    return answer;
}
    