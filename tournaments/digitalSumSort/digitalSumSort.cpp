std::vector<int> digitalSumSort(std::vector<int> a) {

  struct Helper {
    int digitalSum(int n) {
      int sum = 0;
      while (n > 0) {
        sum += n % 10;
        n /= 10;
      }
      return sum;
    }
  };
  Helper h;

  std::map<int, std::vector<int>> buckets;
  for (int i = 0; i < a.size(); i++) {
    int sum = h.digitalSum(a[i]);
    buckets[sum].push_back(a[i]);
  }

  std::vector<int> b;
  for (auto& kv : buckets) {
    std::vector<int>& bucket = kv.second;
    std::sort(bucket.begin(), bucket.end());
    for (int i = 0; i < bucket.size(); i++) {
      b.push_back(bucket[i]);
    }
  }

  return b;
}
