function chessBoardCellColor(cell1, cell2) {
    return 0===((cell1.charCodeAt()+Number(cell1[1])+cell2.charCodeAt()+Number(cell2[1]))&1);
}
