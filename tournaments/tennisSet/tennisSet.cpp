bool tennisSet(int score1, int score2) {
  if (score1 < score2) {
    int tmp = score1;
    score1 = score2;
    score2 = tmp;
  }
  if (score1 == 6 && score2 < 5 || score1 == 7 && score2 < 7 && score2 > 4) {
    return true;
  }
  return false;
}
