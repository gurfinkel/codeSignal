int feedingTime(string[][] classes) {
    var n = classes.Length;
    var store = new List<HashSet<String>>();
    var graph = new bool[n][];

    foreach (string[] animals in classes) {
        var item = new HashSet<String>();

        foreach (string animal in animals) {
            item.Add(animal);
        }

        store.Add(item);
    }

    for (int idx = 0; n > idx; ++idx) {
        graph[idx] = new bool[n];

        foreach (String animal in store[idx]) {
            for (int j = 0; n > j && idx != j; ++j) {
                if (store[j].Contains(animal)) {
                    graph[idx][j] = true;
                    graph[j][idx] = true;
                }
            }
        }
    }

    int minDays = 1;

    while (true) {
        int[] coloring = new int[n];

        if (graphColoring(graph, minDays, coloring, 0)) {
            return minDays;
        } else if (5 == minDays) {
            return -1;
        } else {
            ++minDays;
        }
    }
}

bool isSafe(int currVertex, bool[][] graph, int[] coloring, int color) {
    for (int idx = 0; graph.Length > idx; ++idx) {
        if (graph[currVertex][idx] && color == coloring[idx]) {
            return false;
        }
    }

    return true;
}

bool graphColoring(bool[][] graph, int maxColor, int[] coloring, int currVertex) {
    if (graph.Length == currVertex) {
        return true;
    }

    for (int color = 1; maxColor >= color; ++color) {
        if (isSafe(currVertex, graph, coloring, color)) {
            coloring[currVertex] = color;

            if (graphColoring(graph, maxColor, coloring, 1 + currVertex)) {
                return true;
            }

            coloring[currVertex] = 0;
        }
    }

    return false;
}
