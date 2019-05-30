function metroCard(lastNumberOfDays) {
    return (30 === lastNumberOfDays || 28 === lastNumberOfDays) ? [31] : [28, 30, 31];
}
