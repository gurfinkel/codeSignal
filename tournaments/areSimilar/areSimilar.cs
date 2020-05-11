bool areSimilar(int[] a, int[] b) {
    var store = new Dictionary<int, List<int>>();
    var sumA = 0;
	var sumB = 0;

    for (int i = 0; a.Length > i; ++i) {
		sumA += a[i];
        if (store.ContainsKey(a[i])) {
            store[a[i]].Add(i);
        } else {
            store.Add(a[i], new List<int> {i});
        }
    }

    var wrongIndex = new List<int>();
    for (int i = 0; b.Length > i; ++i) {
		sumB += b[i];
        if (store.ContainsKey(b[i])) {
            if (!store[b[i]].Contains(i)) {
                wrongIndex.Add(i);
            }
        } else {
            return false;
        }
    }

	if (sumA != sumB) {
		return false;
	}

	if (0 == wrongIndex.Count) {
		return true;
	} else if (2 == wrongIndex.Count) {
		var number1 = b[wrongIndex[0]];
		var number2 = b[wrongIndex[1]];

		var indexList = store[number1];
		foreach (var index in indexList) {
			if (a[index] == number1) {
				return true;
			}
		}

		return false;
	} else {
		return false;
	}
}
