std::vector<double> liquidMixing(std::vector<int> densities) {
  std::vector<double> result = {(double)densities[0]};
  for (int i = 1; i < densities.size(); i++) {
    for (int j = 0; j <= i; j++) {
      if (densities[i] <= densities[j]) {
        int tmp = densities[i];
        for (int k = i; k > j; k--) {
          densities[k] = densities[k - 1];
        }
        densities[j] = tmp;
        if (i % 2 == 1) {
          result.push_back((densities[(i + 1) / 2] +
                            densities[i / 2]) / 2.0);
        } else {
          result.push_back(densities[i / 2]);
        }
        break;
      }
    }
  }
  return result;
}
