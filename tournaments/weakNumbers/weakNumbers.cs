int[] weakNumbers(int n) {
    if (5 > n) {
		return new int[] {0, n};
	}

	var store = new int[n + 1, 2];

	for (int i = 1; n >= i; ++i) {
		var tempWeakness = 0;
		var tempDivisors = divCount(i);

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
	var divisors = divCount(n);

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

int divCount(int n) {
    int cnt = 0;
    for (int i = 1; i <= Math.Sqrt(n); i++) {
        if (n % i == 0) {
            if (n / i == i) {
				cnt++;
			} else {
				cnt = cnt + 2;
			}
        }
    }

    return cnt;
}
