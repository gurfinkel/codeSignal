function dfsComponentSize(matrix, vertex) {
    const dfs = function(a) {
        colors[a] = 'g';
        ++result;

        for (let i = 0; n > i; ++i)
            if (matrix[a][i] && 'w' === colors[i])
                dfs(i);

        colors[a] = 'b';
    };

    const n = matrix.length;
    const colors = new Array(n).fill('w');
    let result = 0;

    dfs(vertex);

    return result;
}
