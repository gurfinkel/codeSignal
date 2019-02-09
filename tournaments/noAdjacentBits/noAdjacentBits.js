function noAdjacentBits(a) {

    var lastBit = 0,
        idx = 0;

    while ((1 << idx) <= a) {
      var curBit = (a >> idx) & 1;
      if (lastBit && curBit) {
          return false;
      }
      lastBit = curBit;
      idx++;
    }

    return true;
}
