function checkPalindrome(inputString) {
    const n = inputString.length;
    const leftHalf = inputString.substring(0, ~~(n / 2));
    const rightHalf = [...inputString.substring(Math.ceil(n / 2))].reverse().join('');

    return leftHalf === rightHalf;
}
