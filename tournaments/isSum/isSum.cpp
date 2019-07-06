bool isSum(int value) {

  int i = 1;
  while (value > 0) {
    value -= i;
    i++;
  }
  if (!value) {
    return true;
  }
  return false;
}
