std::vector<std::string> fileNaming(std::vector<std::string> names) {
  struct HashMapElement {
    std::string element;
    int hash;
    int version; // the smallest possible integer to use with this name

    HashMapElement(std::string a, int b, int c) {
      element = a;
      hash = b;
      version = c;
    }
  };

  struct Helper {
    /*
      Information about the string in the hash map
      is stored in the following way:
      [string itself,
       its hash,
       the smallest possible integer to use with this name]
    */
    int hashMapSize;
    std::vector<HashMapElement> hashMap;

    Helper(int halfSize) {
      hashMapSize = halfSize * 2;
      for (int i = 0; i < hashMapSize; i++) {
        hashMap.push_back(HashMapElement("", -1, 0));
      }
    }

    int calculateHash(std::string inputString) {
      const int P = 307;
      const int M = 1000003;
      int hashValue = 0;
      for (int i = 0; i < inputString.size(); i++) {
        hashValue = (hashValue * P + int(inputString[i])) % M;
      }
      return hashValue;
    }

    int searchHM(int position, int hash) {
      while (hashMap[position].element != ""
          && hashMap[position].hash != hash) {
        position = (position + 1) % hashMapSize;
      }
      return position;
    }
  };

  std::vector<std::string> result;
  Helper h = Helper(names.size());

  for (int i = 0; i < names.size(); i++) {
    int hash = h.calculateHash(names[i]);
    int startPos = h.searchHM(hash % h.hashMapSize, hash);
    if (h.hashMap[startPos].element == "") {
      h.hashMap[startPos] = HashMapElement(names[i], hash, 1);
      result.push_back(names[i]);
    }
    else {
      std::string newName = names[i] + "(" +
          std::to_string(h.hashMap[startPos].version) + ")";
      int newNameHash = h.calculateHash(newName);
      int position = h.searchHM(newNameHash % h.hashMapSize, newNameHash);

      while (h.hashMap[position].element != "") {
        h.hashMap[startPos].version++;
        newName = names[i] + "(" +
            std::to_string(h.hashMap[startPos].version) + ")";
        newNameHash = h.calculateHash(newName);
        position = h.searchHM(newNameHash % h.hashMapSize, newNameHash);
      }
      h.hashMap[position] = HashMapElement(newName, newNameHash, 1);
      result.push_back(newName);
      h.hashMap[startPos].version++;
    }
  }
  return result;
}
