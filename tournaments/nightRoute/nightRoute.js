function nightRoute(city) {
    var routes = [[0,0]],
        dist   = [0];
    for ([i, d] of routes) {
        for (j in city[i])
            if (city[i][j] >= 0)
                if (dist[j] == undefined || dist[j] > d + city[i][j]) {
                    routes.push([j, d + city[i][j]])
                    dist[j] = d + city[i][j]
                }
        //console.log(dist, routes.length);
    }
    return dist.pop();
}
