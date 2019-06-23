function cellsJoining(table, coords) {
    cols = table[0].match(/-+/g).map(c=> c.length).map(r => (y=j,j+=r+1,y), j=0);
    cols.push(table[0].length-1);
    rows = table.map(r => r[0]).join``.match(/\|+/g).map(c => c.length).map(r => (y=j,j+=r+1,y), j=0);
    rows.push(table.length-1);

    rblit = rows.slice(coords[1][0],coords[0][0]+2);
    cblit = cols.slice(coords[0][1],coords[1][1]+2);

    T = table.map(r => r.split``);

    for (row = rblit.slice(-1)[0]; --row > rblit[0]; ) {
      for (col = cblit.length-1; --col > 0; ) {
        T[row][cblit[col]] = ' ';
      }

      // Need to only blit these if not necessary
      if (cblit[0] == cols[0])
        T[row][cblit[0]] = '|';
      if (cblit[cblit.length-1] == cols[cols.length-1])
        T[row][cblit[cblit.length-1]] = '|';
    }

    for (col = cblit.slice(-1)[0]; --col > cblit[0]; ) {
      for (row = rblit.length-1; --row > 0; ) {
        T[rblit[row]][col] = ' ';
      }

      // Need to only blit these if not necessary
      if (rblit[0] == rows[0])
        T[rblit[0]][col] = '-';
      if (rblit[rblit.length-1] == rows[rows.length-1])
        T[rblit[rblit.length-1]][col] = '-';
    }

    return T.map(r => r.join``);
}
