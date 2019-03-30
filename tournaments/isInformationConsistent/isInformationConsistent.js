function isInformationConsistent(evidences) {
  const rows = evidences.length;
  const cols = evidences[0].length;

  for (let j = 0; cols > j; ++j) {
      let respond = 0;
      for (let i = 0; rows > i; ++i) {
          if (0 === evidences[i][j]) continue;
          else if (1 === evidences[i][j]) {
              if (0 === respond) respond = 1;
              else if (-1 === respond) return false;
          } else {
            if (0 === respond) respond = -1;
            else if (1 === respond) return false;
          }
      }
  }

  return true;
}
