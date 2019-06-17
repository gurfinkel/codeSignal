int appleBoxes(int k) {

  int sum = 0;
  int x = 0;
  do {
    if (x % 2 == 1) {
      sum += x * x;
    } else {
      sum -= x * x;
    }
    x ++;
  } while (x <= k);

  return -sum;
}
