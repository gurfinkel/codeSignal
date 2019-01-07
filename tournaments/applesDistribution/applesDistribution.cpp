int applesDistribution(int apples, int boxCapacity, int maxResidue) {
    int count = 0;
    for (int i = 1; i <= boxCapacity; i++) {
        if (apples % i <= maxResidue) ++count;
    }
    return count;
}
