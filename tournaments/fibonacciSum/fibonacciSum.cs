int[] fibonacciSum(int n) {
  List<int> fib= new List<int>();
  int fib0 = 1;
  int fib1 = 1;
  fib.Add(fib1);
  while (fib1 <= n) {
    int fib2 = fib0 + fib1;
    fib.Add(fib1);
    fib0 = fib1;
    fib1 = fib2;
  }
  List<int> ans= new List<int>();
  for (int i = (int)fib.Count - 1; i >= 0; i--) {
    if (n >= fib.ElementAt(i)) {
      n -= fib.ElementAt(i);
      ans.Add(fib.ElementAt(i));
    }
  }
  ans.Reverse();
  return ans.ToArray();
}