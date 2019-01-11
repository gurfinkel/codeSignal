bool checkIncreasingSequence(int[] seq) {
    for (int i = 1; i < seq.Length; i++) {
        if (seq[i] <= seq[i - 1]) {
            return false;
        }
    }

    return true;
}