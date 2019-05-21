int maxSubarray(std::vector<int> inputArray) {
    int currentMax = 0;
    int mx = 0;

    for (int i = 0; i < inputArray.size(); i++) {
        currentMax = std::max(0, currentMax + inputArray[i]);
        mx = std::max(mx, currentMax);
    }

    return mx;
}
