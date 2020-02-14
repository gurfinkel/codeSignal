function chessBoardCellColor(cell1, cell2) {
    return ((cell1[0].charCodeAt() - cell2[0].charCodeAt()) & 1) === ((cell1[1] - cell2[1]) & 1);
}
