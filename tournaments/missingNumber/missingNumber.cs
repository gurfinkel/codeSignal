int missingNumber(int[] arr) {
    var n = arr.Length;
    var sum = (n * (n + 1)) >> 1;

    foreach (int item in arr) {
        sum -= item;
    }

    return sum;
}
