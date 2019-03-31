string[] addBorder(string[] picture) {
    var rows = picture.Length;
    var cols = picture[0].Length;

    var result = new string[2 + rows];
    result[0] = new String('*', 2 + cols);
    result[1 + rows] = new String('*', 2 + cols);

    for (int i = 0; rows > i; ++i) {
        var newRow = new StringBuilder(cols);
        newRow.Append('*');
        newRow.Append(picture[i]);
        newRow.Append('*');
        result[1 + i] = newRow.ToString();
    }

    return result;
}
