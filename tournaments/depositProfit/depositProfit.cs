int depositProfit(int deposit, int rate, int threshold) {
    var result = 0;
	Single sum = deposit;
	Single percentage = (Single)rate/100 + 1;

    while (threshold > sum) {
        sum *= percentage;
        ++result;
    }

    return result;
}
