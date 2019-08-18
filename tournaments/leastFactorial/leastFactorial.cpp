int leastFactorial(int n) {

  int factorial = 1,
      k = 2;
  while (factorial < n) {
    factorial *= k;
    k++;
  }
  return factorial;
}
