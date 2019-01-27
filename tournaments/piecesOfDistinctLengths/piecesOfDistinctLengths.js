function piecesOfDistinctLengths(strawLength) {
    let length = 1;

    while (0 <= strawLength) {
        strawLength -= length++;
    }
        
    return length - 2;
}
