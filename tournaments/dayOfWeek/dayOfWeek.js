function dayOfWeek(birthdayDate) {
    let date = new Date(birthdayDate);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let dayOfWeek = date.getDay();
    let result = 0;

    while (true) {
        result += (29 == day && 1 == month) ? 4 : 1;

        if (0 == (year + result) % 100 && 29 == day && 1 == month) {
            continue;
        }

        if (dayOfWeek == (new Date(year + result, month, day)).getDay()) {
            return result;
        }

    }

    return result;
}
