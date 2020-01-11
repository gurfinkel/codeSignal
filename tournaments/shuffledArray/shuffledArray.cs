int[] shuffledArray(int[] shuffled) {
    var list = shuffled.ToList();
    var sum = list.Sum();
    list.Remove(sum/2);
    list.Sort();

    return list.ToArray();
}
