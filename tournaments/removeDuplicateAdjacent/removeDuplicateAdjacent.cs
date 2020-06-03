string removeDuplicateAdjacent(string s) {
    var str = removeDuplicateAdjacentOnePass(s);

    while (str != s) {
        s = str;
        str = removeDuplicateAdjacentOnePass(s);
    }

    return str;
}

private string removeDuplicateAdjacentOnePass(string s) {
    var sb = new StringBuilder();
    var stack = new Stack<(char, int)>();
    var flag = false;

    foreach (char letter in s) {
        if (0 < stack.Count && letter == stack.Peek().Item1) {
            stack.Push((letter, 1 + stack.Peek().Item2));
        } else {
            stack.Push((letter, 1));
        }
    }

    foreach (var letter in stack) {
        if (1 < letter.Item2) {
            flag = true;
        } else if (flag && 1 == letter.Item2) {
            flag = false;
        } else {
            sb.Insert(0, letter.Item1);
        }
    }

    return sb.ToString();
}
