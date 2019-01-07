function regularBracketSequence1(sequence) {

    var balance = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === '(') {
            balance++;
        }
        else {
            balance--;
        }
        if (balance < 0) {
            return  false ;
        }
    }
    if (balance) {
        return false;
    }

    return true;
}
    