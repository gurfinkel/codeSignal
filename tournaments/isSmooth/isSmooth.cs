bool isSmooth(int[] arr) {
    if (arr[0] != arr[arr.Length - 1]) {
        return false;
    }

    var middle = (1 == (arr.Length & 1) ? arr[arr.Length / 2] : (arr[arr.Length / 2] + arr[arr.Length / 2 - 1]));

    return arr[0] == middle;
}
