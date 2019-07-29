char[][] drawRectangle(char[][] canvas, int[] rectangle) {
    var rows = canvas.Length;
    var cols = canvas[0].Length;

    canvas[rectangle[1]][rectangle[0]] = '*';
    canvas[rectangle[1]][rectangle[2]] = '*';
    canvas[rectangle[3]][rectangle[0]] = '*';
    canvas[rectangle[3]][rectangle[2]] = '*';

    for (int i = rectangle[0] + 1; rectangle[2] > i; ++i) {
        canvas[rectangle[1]][i] = '-';
        canvas[rectangle[3]][i] = '-';
    }

    for (int i = rectangle[1] + 1; rectangle[3] > i; ++i) {
        canvas[i][rectangle[0]] = '|';
        canvas[i][rectangle[2]] = '|';
    }

    return canvas;
}
