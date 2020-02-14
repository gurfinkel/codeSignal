int newYearCelebrations(string takeOffTime, int[] minutes) {
    int temp;

    for (int i = minutes.Length - 1; i >= 1; i--) {
        temp = minutes[i - 1];
        minutes[i] -= temp;
    }

    DateTime time;
    var hour = int.Parse(takeOffTime.Split(':')[0]);
    var minute = int.Parse(takeOffTime.Split(':')[1]);
    var count = 0;

    if (hour == 0 && minute == 0) time = new DateTime(2018, 1, 1, hour, minute, 0);
    else time = new DateTime(2017, 12, 31, hour, minute, 0);

    var newYear = new DateTime(2018, 1, 1, 0, 0, 0);
    for (int i = 0; i < minutes.Length; i++) {
        if (time == newYear) count++;
        else if (time < newYear) {
            if (time.AddMinutes(minutes[i]) >= newYear) count++;
        }
        time = time.AddMinutes(minutes[i]);
        time = time.AddHours(-1);
    }

    return time <= newYear ? count + 1 : count;
}
