bool isArithmeticProgression(std::vector<int> sequence) {

    int difference = sequence[1] - sequence[0];
    for (int i = 2; i < sequence.size(); i++) {
        if (sequence[i] - sequence[i - 1] != difference) {
            return false;
        }
    }
    return true;
}
