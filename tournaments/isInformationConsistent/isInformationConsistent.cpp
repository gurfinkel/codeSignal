bool isInformationConsistent(std::vector<std::vector<int>> evidences) {

  for (int j = 0; j < evidences[0].size(); j++) {
    bool innocent = false,
         guilty = false;
    for (int i = 0; i < evidences.size(); i++) {
      switch (evidences[i][j]) {
        case -1:
          innocent = true;
          break;
        case 1:
          guilty = true;
          break;
      }
    }

    if (innocent && guilty) {
      return false;
    }
  }

  return true;
}
