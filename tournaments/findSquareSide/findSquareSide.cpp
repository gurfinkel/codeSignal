int findSquareSide(std::vector<int> x, std::vector<int> y) {

  typedef std::pair<int, int> point;
  #define point(A, B) std::make_pair(A, B)

  struct Helper {
    int sqr(int x) {
      return x * x;
    }
    int squareDistance(point a, point b) {
      return sqr(a.first - b.first) + sqr(a.second - b.second);
    };
  };

  Helper h;

  int answer = h.squareDistance(point(x[0], y[0]), point(x[1], y[1]));
  for (int i = 2; i < 4; i++) {
    answer = std::min(answer,
                      h.squareDistance(point(x[i - 1], y[i - 1]),
                                       point(x[i], y[i])));
  }
  return answer;
}
