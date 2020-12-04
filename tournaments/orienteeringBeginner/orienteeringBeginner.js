function orienteeringBeginner(n, roads) {
    v = []
    return (f = (i, d) => v[i] < d || roads[i].map(([j, e]) => f(j, d + e), v[i] = d))(0, 0) && v[n - 1];
}
