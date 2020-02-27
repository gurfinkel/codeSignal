function graphDistances(g, s) {
    const n = g.length;
    const d = Array(n).fill(Infinity);
    const queue = new Set(Array.from({length: n}, (_, i) => i));

    d[s] = 0;

    while (queue.size) {
        let min = -1;

        for (const i of queue)
            if (-1 === min || d[i] < d[min])
                min = i;

        queue.delete(min);

        for (let next = 0; n > next; ++next) {
            const weight = g[min][next];

            if (-1 !== weight) {
                const otherDist = d[min] + weight;

                if (otherDist < d[next])
                    d[next] = otherDist;
            }
        }
    }
    return d;
}
