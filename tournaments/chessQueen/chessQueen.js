function chessQueen(q) {
    const result = [];
    const cols = new Set([0,1,2,3,4,5,6,7]);
    const rows = new Set([1,2,3,4,5,6,7,8]);
    const aCode = 'a'.charCodeAt();
    const qx = q.charCodeAt(0) - aCode;
    const qy = Number(q[1]);
    
    cols.delete(qx);
    rows.delete(qy);
    
    for (const col of cols) {
        for (const row of rows) {
            if ((col - row !== qx - qy) && (col + row !== qx + qy)) {
                result.push(String.fromCharCode(col + aCode) + row);
            }
        }
    }
    
    return result;
}
