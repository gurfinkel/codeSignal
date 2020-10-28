bool incorrectPasscodeAttempts(string passcode, string[] attempts) {
    var counter = 0;

    foreach (var item in attempts) {
        if (passcode == item) {
            counter = 0;
        } else {
            ++counter;
            if (9 < counter) {
                return true;
            }
        }
    }

    return false;
}
