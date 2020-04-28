int maxPairProduct(int[] arr) {
    var n = arr.Length;
    var map = new Dictionary<int, int> ();

    foreach (var item in arr) {
        if (map.ContainsKey(item)) {
            ++map[item];
        } else {
            map.Add(item, 1);
        }
    }

    Array.Sort(arr);

    for (var i = n - 1; 1 < i; --i) {
        if (arr[i] == arr[i - 1]) {
            continue;
        }
        for (var j = 0; i > j && arr[j] <= Math.Sqrt(arr[i]); ++j) {
            if (0 == arr[i] % arr[j]) {
                int result = arr[i] / arr[j];

                if (result != arr[j] && map.ContainsKey(result)) {
                    return arr[i];
                } else if (result == arr[j] && map[result] > 1) {
                    return arr[i];
                }
            }
        }
    }

    return -1;
}
