/* basic idea:
 * try all possible positions and find which one is where the prisoner can not escape.
 * restart the loop when finished until found new positions.
 * on the next rounds the possible moves reduced with the marked positions.
 *
 * at the end if the start position marked, then the prisoner can not escape otherwise can not catchable.
 */
function prisonerEscape(nodes, graph, [p, g1, g2]) {
    //console.time()
    // set p, g1, g2 to 0-based and sort
    p--
    g1--
    g2--
    
    // collect the edges of the vertexes to an array
    g = Array(nodes).fill(0).map((v, i) => [i])
    for (i = 0; a = graph[i++]; ) {
        b = graph[i++] - 1
        g[--a].push(b)
        g[b].push(a)
    }
    
    // array for positions where no escape
    x = Array(nodes).fill(0).map(v => [])
    n = 1
    // try every position and check prisoner can escape from that situation or not.
    // if changes counted, then run the loop again
    while (n)
        for (n = i = 0; i < nodes; i++)
            for (j = 0; j < nodes; j++)
                for (k = j + 1; k < nodes; k++)
                    if (!x[i][j * nodes + k])
                        // try to move with the prisoner and with the guards.
                        // if can't move to free cell, then mark the situation.
                        if (g[i].every(v => g[v].includes(j) || g[v].includes(k) || g[j].some(w => g[k].some(z => x[v][w * nodes + z]))))
                            n = x[i][j * nodes + k] = x[i][k * nodes + j] = 1
    //console.timeEnd()
    // return 1 if start position marked as "no escape" or 0 if not marked.
    return 1 === (x[p][g1 * nodes + g2] | 0);
}
