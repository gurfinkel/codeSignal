string getMonthName(int mo) {
    return 1 <= mo && 12 >= mo ? CultureInfo.CurrentCulture.DateTimeFormat.GetMonthName(mo).Substring(0,3) : "invalid month";
}
