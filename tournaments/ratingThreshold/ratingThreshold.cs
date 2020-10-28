int[] ratingThreshold(double threshold, int[][] ratings) {
    List<int> result = new List<int>();

    for (int i = 0; ratings.Length > i; ++i) {
        int[] item = ratings[i];
        int s = item.Sum();

        if (threshold > ((Double)s / item.Length)) {
            result.Add(i);
        }
    }

    return result.ToArray();
}
