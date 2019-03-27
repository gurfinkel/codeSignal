int howManySundays(int n, string startDay) {
    return (Array.IndexOf(Enum.GetNames(typeof(DayOfWeek)), startDay) + n) / 7;
}
