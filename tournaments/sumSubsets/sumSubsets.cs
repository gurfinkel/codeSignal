int[][] sumSubsets(int[] arr, int num) {
    var ans = new List<int[]>();
    var cur = new List<int>();

    combinationSumRe(arr, num, 0, cur, ans);

    return ans.ToArray();
}

void combinationSumRe(int[] a, int b, int start, List<int> path, List<int[]> res) {
    if (b == 0) {
        res.Add(path.ToArray());
        return;
    }
    for (int i = start; i < a.Length && b >= a[i]; ++i) {
        if (i!=start && a[i-1] == a[i]) continue;
        path.Add(a[i]);
        combinationSumRe(a, b-a[i], i+1, path, res);
        path.RemoveAt(path.Count - 1);
    }
}
