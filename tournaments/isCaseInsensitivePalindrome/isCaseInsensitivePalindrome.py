def isCaseInsensitivePalindrome(inputString):
    return inputString.lower() == inputString[::-1].lower()
