function dataRoute(resource, server, network) {
    flowSpeed = 0;
    maxSpeed  = Math.min(
        network[resource].reduce((a, b) => a + b),
        network.reduce((a, b) => a + b[server], a = 0),
    )
    edges = network.map((r, i) => {
        e = [];
        r.map((v, j) => v && e.push(j));
        return e;
    })
    
    queue = [[-1, resource]];
    i = 0;
    while (queue[i]) {
        [prev, last]  = queue[i];
        speed = maxSpeed;
        list = [];
        while (prev > -1 && speed > 0) {
            list.push(last);
            [p, l] = queue[prev];
            val = network[l][last];
            if (speed > val)
                speed = val;
            prev = p;
            last = l;
        };
        [prev, last]  = queue[i];
        
        if (speed > 0) {
            for (j = 0; j < edges[last].length; j++) {
                next = edges[last][j];
                if (next == server) {
                    if (speed > network[last][server])
                        speed = network[last][server];
                    network[last][server] -= speed;
                    while (prev > -1 && speed > 0) {
                        [p, l] = queue[prev];
                        network[l][last] -= speed;
                        prev = p;
                        last = l;
                    }
                    flowSpeed += speed;
                } else {
                    if (!list.includes(next))
                        queue.push([i, next]);
                }
                [prev, last]  = queue[i];
            }
        }
        i++;
        if (flowSpeed == maxSpeed) break;
    }
    return flowSpeed;
}
