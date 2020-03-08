function missedClasses(year, daysOfTheWeek, holidays) {
    return holidays.map(
        e => new Date(`${e}-${year}`)
    ).map(
        e => e.getMonth() <= 5 ? new Date(1 + e.getFullYear(), e.getMonth(), e.getDate()) : e
    ).filter(
        e => ~daysOfTheWeek.map(e => 7 === e ? 0 : e).indexOf(e.getDay())
    ).length;
}
