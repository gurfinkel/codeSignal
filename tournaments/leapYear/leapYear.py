def leapYear(year):
    if 0 == year % 4 and not 0 == year % 100 or 0 == year % 400:
        return True
    return False
