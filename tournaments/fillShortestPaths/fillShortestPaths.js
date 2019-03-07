function fillShortestPaths(plan) {
    const rows = plan.length;
    const cols = plan[0].length;
    let sRow = 0;
    let sCol = 0;

    for (let i = 0; rows > i; ++i) {
        const j = plan[i].indexOf('s');

        if (0 <= j) {
            sRow = i;
            sCol = j;
            break;
        }
    }

    if (0 === sRow || 0 === sCol) {
        return plan;
    }

    for (let row = 0; rows > row; ++row) {
        for (let col = 0; cols > col; ++col) {
            if (Math.max(Math.abs(row-sRow), Math.abs(col-sCol)) === Math.min(sRow+1,sCol+1,cols-sCol,rows-sRow)-Math.min(row+1,col+1,cols-col,rows-row)) {
                plan[row][col] = plan[row][col].charCodeAt() > '#'.charCodeAt() ? plan[row][col] : '#';
            }
        }
    }

    return plan;
}
