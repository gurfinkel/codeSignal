std::vector<int> myFilter(std::vector<int> inputArray,
                          int extraElement) {

    std::vector<int> result;
    for (int i = 0; i < inputArray.size(); i++) {
        if (inputArray[i] == extraElement) {
            continue;
        }
        result.push_back( inputArray[i] );
    }

    return result;
}
