int firstOperationCharacter(string expr) {
    if (!expr.Contains('(')) return WithoutParanthesis(expr)[0];
    int startIndex = 0, currentDepth = 0, maxDepth = 0;
    var listOfSameDepthExpressions = new List<int[]>();
    for (int i = 0; i < expr.Length; i++)
    {
        if (expr[i] == '(')
        {
            currentDepth++;
            startIndex = i;
            if (currentDepth > maxDepth)
            {
                listOfSameDepthExpressions.Clear();
                maxDepth = currentDepth;
            }
        }
        else if (expr[i] == ')')
        {
            if (currentDepth == maxDepth)
            {
                var wpIndex = WithoutParanthesis(expr.Substring(startIndex + 1, i - startIndex));
                listOfSameDepthExpressions.Add(new int[] { startIndex + 1 + wpIndex[0], wpIndex[1] });
            }
            currentDepth--;
        }
    }

    return !listOfSameDepthExpressions.Select(x => x[1]).Contains('*') ? listOfSameDepthExpressions[0][0] : listOfSameDepthExpressions.First(x => x[1] == '*')[0];
}

static int[] WithoutParanthesis(string expression)
{
    var indexOfAsterix = expression.IndexOf('*');
    return indexOfAsterix != -1 ? new[] { indexOfAsterix, '*' } : new[] { expression.IndexOf('+'), '+' };
}
