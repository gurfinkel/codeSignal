function isCaseInsensitivePalindrome(inputString) {
    return inputString.toLowerCase() === [...inputString].reverse().join('').toLowerCase();
}
