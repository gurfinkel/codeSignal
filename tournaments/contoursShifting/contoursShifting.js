function contoursShifting(matrix) {
  const rws = matrix.length;
  const cls = matrix[0].length;
  const tLength = rws*cls;
  const tmp = () => Array(rws).fill([]).map(_ => Array(cls).fill(0));

  crs = Array(tLength).fill(1);
  for (let x = 0; x < 2; x++) {
    tp = 0, rt = 1, bm = rws-1, lt = bm-1, ix = 0, c = [], r = tmp();
    while (tLength > c.length) {
      t = []
      while((i = r[tp].indexOf(0))>-1) {t.push(matrix[tp][i]); r[tp][i]=crs.shift() }

      while(rt<rws&&(i = r[rt].lastIndexOf(0))>-1) {t.push(matrix[rt][i]); r[rt++][i]=crs.shift()}

      while((i = r[bm].lastIndexOf(0))>-1) {t.push(matrix[bm][i]); r[bm][i]=crs.shift()}

      while(lt>tp&&(i = r[lt].indexOf(0))>-1) {t.push(matrix[lt][i]); r[lt--][i]=crs.shift()}

      if (ix++%2) {tt = t.shift(); t = [...t, tt]}
      else t = [t.pop(),...t]
      c = [...c,...t]
      tp++
      bm--
      rt = tp+1
      lt = bm-1
    }
    crs = c
  }
  return r
}
