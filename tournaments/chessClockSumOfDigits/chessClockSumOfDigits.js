function chessClockSumOfDigits(initialTime, k) {
  const left = initialTime[0].split('.');
  const right = initialTime[1].split('.');
  const h1 = parseInt(left[0]);
  const s1 = parseInt(left[1]);
  const h2 = parseInt(right[0]);
  const s2 = parseInt(right[1]);
  let min = h1 + ~~(s1 / 10) + s1 % 10 + h2 + ~~(s2 / 10) + s2 % 10;
  let max = min;

  for (let i = 0; k >= i; ++i) {
    let vh1 = h1 - ~~(i / 60);
    let vs1 = s1 - i % 60;

    if (vs1 < 0) {
      vs1 += 60;
      --vh1;
    }
    if (vh1 < 0 || !vs1 && !vh1) break;

    for (let j = 0; k >= i + j; ++j) {
      let vh2 = h2 - ~~(j / 60);
      let vs2 = s2 - j % 60;

      if (vs2 < 0) {
        vs2 += 60;
        --vh2;
      }

      let m = vh1 + ~~(vs1 / 10) + vs1 % 10;

      if (vh2 < 0 || !vs2 && !vh2) {
        max = Math.max(max, m);
        min = Math.min(min, m);
        break;
      }

      m += vh2 + ~~(vs2 / 10) + vs2 % 10;
      max = Math.max(max, m);
      min = Math.min(min, m);
    }
  }

  return [min, max];
}
