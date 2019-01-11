string chessNotation(string notation) {
    var initialBoard = notation.Split('/');
    var rotatedBoard = CreateRotatedBoard(initialBoard);
    return ToNormalNotation(rotatedBoard);
}

static List<string> CreateRotatedBoard(string[] initialBoard)
{
    var list = new List<string>();
    var sb = new StringBuilder();
    foreach (var row in initialBoard)
    {
        foreach (var box in row)
        {
            if (char.IsDigit(box)) sb.Append('1', box - 48);
            else sb.Append(box);
        }
        list.Add(sb.ToString());
        sb.Clear();
    }
    return list.Select((t, i) => string.Join("", list.Select(x => x[i]).Reverse())).ToList();
}

static string ToNormalNotation(List<string> board)
{
    var number = 0;
    var sb = new StringBuilder();
    for (int i = 0; i < board.Count; i++)
    {
        for (int j = 0; j < board[i].Length; j++)
        {
            if (char.IsLetter(board[i][j])) sb.Append(board[i][j]);
            else
            {
                var skip = board[i].Skip(j).TakeWhile(x => char.IsDigit(x));
                sb.Append(skip.Count());
                j += skip.Count() - 1;
            }
        }
        sb.Append('/');
    }
    return sb.Remove(sb.Length - 1, 1).ToString();
}
