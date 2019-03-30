std::vector<int> arrayCenter(std::vector<int> a) {

  int n = a.size();
  int suma = a[0],
      mina = a[0];
  for (int i = 1; i < n; i++) {
    suma += a[i];
    mina = std::min(mina, a[i]);
  }

  std::vector<int> b;
  for (int i = 0; i < n; i++) {
    if (std::abs(n * a[i] - suma) < n * mina) {
      b.push_back(a[i]);
    }
  }

  return b;
}
