function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) return value1 + value2;
    if (Math.min(weight1, weight2) > maxW) return 0;
    if (weight1 <= maxW && (value1 >= value2 || weight2 > maxW)) return value1;

    return value2;
}
