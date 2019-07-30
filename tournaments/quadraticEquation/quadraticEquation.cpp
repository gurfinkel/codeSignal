std::vector<double> quadraticEquation(int a, int b, int c) {

  int discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    std::vector<double> empty;
    return empty;
  }
  if (discriminant == 0) {
    std::vector<double> answer(1, - b / (2.0 * a));
    return answer;
  }
  std::vector<double> roots;
  roots.push_back((- b - sqrt(discriminant) ) / (2.0 * a));
  roots.push_back((- b + sqrt(discriminant) ) / (2.0 * a));
  if (roots[0] > roots[1]) {
    double tmp = roots[1];
    roots[1] = roots[0];
    roots[0] = tmp;
  }
  return roots;
}
