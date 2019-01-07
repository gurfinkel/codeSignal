std::vector<std::string> unusualLexOrder(std::vector<std::string> s) {
    for (auto &i:s)
        reverse(i.begin(),i.end());
    sort(s.begin(),s.end());
    for (auto &i:s)
        reverse(i.begin(),i.end());
    return s;
}
