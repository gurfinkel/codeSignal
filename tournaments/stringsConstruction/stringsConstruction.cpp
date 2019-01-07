int stringsConstruction(std::string a, std::string b) {
    int max = a.length();

    for (char ch:std::set<char>(a.begin(), a.end())) {
        int ratio = std::count(b.begin(), b.end(), ch) /std::count(a.begin(), a.end(), ch);
        max = std::min(ratio, max);
    }

    return max;
}