int[] weakNumbers(int n) {
    if (5 > n) return new int[] {0, n};
	var store = new int[n + 1, 2];

    for (var i = 1; n >= i; ++i) {
		var tempWeakness = 0;
		var tempDivisors = getDivisorsNumber(i);
        for (int j = 1; i > j; ++j) {
			if (tempDivisors < store[j, 0]) {
				++tempWeakness;
			}
		}
        store[i, 0] = tempDivisors;
		store[i, 1] = tempWeakness;
	}

    var weaknessResult = 0;
	var numberResult = 1;
	var divisors = getDivisorsNumber(n);

    for (int i = 1; n >= i; ++i) {
		if (store[i, 1] == weaknessResult) {
			++numberResult;
		} else if (store[i, 1] > weaknessResult) {
			weaknessResult = store[i, 1];
			numberResult = 1;
		}
	}

    return new int[2] {weaknessResult, numberResult};
}

int getDivisorsNumber(int n) {
    var result = 0;
    for (var i = 1; Math.Sqrt(n) >= i; ++i) {
        if (0 == n % i) {
            result = (n / i == i) ? result + 1 : result + 2;
        }
    }
    return result;
}
