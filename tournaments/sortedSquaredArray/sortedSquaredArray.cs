int[] sortedSquaredArray(int[] array) {
    return array.ToList().Select(item => item * item).OrderBy(item => item).ToArray();
}
