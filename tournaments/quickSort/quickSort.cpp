int[] quickSort(int[] a, int l, int r) {

  if (l >= r) {
    return a;
  }

  int x = a[l];
  int i = l;
  int j = r;

  while (i <= j) {
    while (a[i] < x) {
      i++;
    }
    while (a[j] > x) {
      j--;
    }
    if (i <= j) {
      int t = a[i];
      a[i] = a[j];
      a[j] = t;
      i++;
      j--;
    }
  }

  quickSort(a, l, j);
  quickSort(a, i, r);

  return a;
}
