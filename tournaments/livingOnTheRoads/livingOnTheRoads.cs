bool[][] livingOnTheRoads(bool[][] roadRegister) {
    var nodeOrder = new int[roadRegister.Length, roadRegister.Length];
    var queue = new Queue<int[]>();
    int length = 0;

    for (int i = 0; i < roadRegister.Length; i++)
        for (int j = i + 1; j < roadRegister.Length; j++)
            if (roadRegister[i][j]) {
                nodeOrder[i, j] = nodeOrder[j, i] = length;
                queue.Enqueue(new[] { i, j });
                length++;
            }

    var result = new bool[length][];
    for (int i = 0; i < length; i++)
        result[i] = new bool[length];

    while (queue.Count > 0) {
        var currentNode = queue.Dequeue();
        int a = currentNode[0];
        int b = currentNode[1];

        RegisterConnection(roadRegister, a, b, nodeOrder, result);
        RegisterConnection(roadRegister, b, a, nodeOrder, result);
    }

    return result;
}

private void RegisterConnection(bool[][] roadRegister, int a, int b, int[,] nodeOrder, bool[][] result) {
    int nodeNumber = nodeOrder[a, b];
    for (int i = 0; i < roadRegister.Length; i++)
        if (roadRegister[a][i] && i != b) {
            int otherNodeNumber = nodeOrder[a, i];
            result[nodeNumber][otherNodeNumber] = result[otherNodeNumber][nodeNumber] = true;
        }
}
