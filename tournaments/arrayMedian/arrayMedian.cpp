double arrayMedian(std::vector<int> sequence) {
  int len = sequence.size();
  std::sort(sequence.begin(), sequence.end());

  if (len % 2 == 0) {
    return (sequence[len / 2] + sequence[len / 2 - 1]) / 2.0;
  }
  else {
    return sequence[(len - 1) / 2];
  }
}
