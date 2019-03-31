int squareDigitsSequence(int a0) {
    if (1 == a0) {
        return 2;
    }

    var store = new Dictionary<long, long>();
    var count = 2;
    long square = getSquare((long)a0);

    while (a0 != square && 1 != square) {
		if (store.ContainsKey(square)) {
			square = store[square];
            break;
		} else {
			var newItem = getSquare(square);
			store.Add(square, newItem);
			square = newItem;
		}
        ++count;
    }

    if (1 == square) {
        ++count;
    }

    return count;
}


long getSquare(long n) {
    long result = 0;

    while (0 < n) {
        var newDigit = n % 10;
        result += (newDigit * newDigit);
        n /= 10;
    }

    return result;
}
