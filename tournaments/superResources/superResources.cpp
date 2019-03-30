typedef std::vector<std::string> elemT;
typedef std::vector<elemT> listT;
listT superResources(listT requests) {

  struct Helper {
    bool le(std::string const & a, std::string const & b) {
      return std::stoi(a) <= std::stoi(b);
    }
  };
  Helper h;

  if (requests.size() < 2) {
    return requests;
  }
  listT parts[2] = {
      listT(requests.begin(), requests.begin() + requests.size() / 2),
      listT(requests.begin() + requests.size() / 2, requests.end())
  };
  parts[0] = superResources(parts[0]);
  parts[1] = superResources(parts[1]);

  listT result;
  int idx[2] = {0, 0};
  int len[2] = {parts[0].size(), parts[1].size()};
  std::string last = "";
  while (idx[0] < len[0] || idx[1] < len[1]) {
    int k;
    if (idx[1] >= len[1] || idx[0] < len[0] &&
        h.le(parts[0][idx[0]][0], parts[1][idx[1]][0])) {
      k = 0;
    } else {
      k = 1;
    }
    elemT element = parts[k][idx[k]++];
    if (element[0] != last) {
      result.push_back(element);
      last = element[0];
    }
  }

  return result;
}
