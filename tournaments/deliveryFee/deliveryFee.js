function deliveryFee(intervals, fees, deliveries) {
    intervals.push(24);
    for (var i = 0; i < intervals.length - 1; i++)
        fees[i] /= deliveries.filter(([h]) => h >= intervals[i] && h < intervals[i+1]).length;
    return fees.every(a => a == fees[0]);
}
