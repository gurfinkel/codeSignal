def lastDigitRegExp(inputString):
    a = inputString[::-1]

    for item in a:
        if item.isdigit():
            return item
