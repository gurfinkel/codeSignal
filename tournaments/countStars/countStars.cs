int countStars(bool[][] adj) {
    int length = adj.Length, numStars = 0;
    var marks = new bool[length];
    var comp = new int[length];
    for (int i = 0; i < length; i++)
        if (!marks[i])
        {
            numStars++;
            markConexComponent(i, adj, numStars, marks, comp);
        }

    for (int i = 1; true; i++)
    {
        var nodes = comp.Select((value, index) => value == i ? index : -1).Where(v => v >= 0);
        if (!nodes.Any())
            break;

        if (nodes.Count() < 2 || nodes.Any(n => adj[n][n]))
        {
            numStars--;
            continue;
        }

        int degree1 = nodes.Count(n => adj[n].Count(nadj => nadj) == 1);
        int degreGraterThan1 = nodes.Count(n => adj[n].Count(nadj => nadj) > 1);

        if (!(nodes.Count() - degree1 <= 1 && degreGraterThan1 <= 1))
            numStars--;
    }

    return numStars;
}

private void markConexComponent(int currentNode, bool[][] adj, int compNum, bool[] marks, int[] comp)
{
    marks[currentNode] = true;
    comp[currentNode] = compNum;
    for (int i = 0; i < adj.Length; i++)
        if (adj[currentNode][i] && !marks[i])
            markConexComponent(i, adj, compNum, marks, comp);
}
