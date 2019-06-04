function contoursShifting(matrix) {
  const getEmptyMatrix = function(){
    return Array(rows).fill([]).map(_ => Array(cols).fill(0));
  };

  const rows = matrix.length;
  const cols = matrix[0].length;
  const tLength = rows*cols;

  let result = [];
  let crs = Array(tLength).fill(1);

  for (let x = 0; 2 > x; ++x) {
    let tp = 0;
    let rt = 1;
    let bm = rows - 1;
    let lt = bm - 1;
    let ix = 0;
    let c = [];
    result = getEmptyMatrix();

    while (tLength > c.length) {
      let t = [];
      while(~(i = result[tp].indexOf(0))) {
        t.push(matrix[tp][i]);
        result[tp][i] = crs.shift();
      }

      while(rows > rt && ~(i = result[rt].lastIndexOf(0))) {
        t.push(matrix[rt][i]);
        result[rt++][i] = crs.shift();
      }

      while(~(i = result[bm].lastIndexOf(0))) {
        t.push(matrix[bm][i]);
        result[bm][i] = crs.shift();
      }

      while(lt > tp && ~(i = result[lt].indexOf(0))) {
        t.push(matrix[lt][i]);
        result[lt--][i] = crs.shift();
      }

      if (ix++&1) {
        let tt = t.shift();
        t = [...t, tt];
      } else t = [t.pop(),...t];

      c = [...c,...t];
      ++tp;
      --bm;
      rt = 1 + tp;
      lt = bm - 1;
    }

    crs = c;
  }

  return result;
}
