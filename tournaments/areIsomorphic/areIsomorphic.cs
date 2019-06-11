bool areIsomorphic(int[][] array1, int[][] array2) {
    var rows1 = array1.Length;
    var rows2 = array2.Length;

    if (rows1 != rows2) {
        return false;
    }

    for (int i = 0; rows1 > i; ++i) {
        if (array1[i].Length != array2[i].Length) {
            return false;
        }
    }

    return true;
}
