std::string properOrImproper(std::vector<int> a) {

  if (std::abs(a[0] / a[1]) < 1) {
    return "Proper";
  }
  return "Improper";
}
