function regularBracketSequence1(sequence) {
    return ![...sequence].reduce((a, b) => '(' === b ? ++a : 0 === a ? a = -9 : --a, 0);
}
