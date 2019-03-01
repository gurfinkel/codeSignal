function improperFractionToMixed(a) {
    const floor = Math.floor(a[0] / a[1]);
    const reminder = a[0] - floor * a[1];

    return [floor, reminder, a[1]];
}
