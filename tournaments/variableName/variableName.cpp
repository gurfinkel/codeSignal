bool variableName(std::string name) {

  for (int i = 0; i < name.size(); i++) {
    if (!('a' <= name[i] && name[i] <= 'z' ||
          'A' <= name[i] && name[i] <= 'Z' ||
          '0' <= name[i] && name[i] <= '9' ||
          name[i] == '_')) {
      return false;
    }
  }

  if ('0' <= name[0] && name[0] <= '9') {
    return false;
  }

  return true;
}
