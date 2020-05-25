function flightPlan(times, source, dest) {

    //parse hh:mm to time in minutes
    S2T = x => +x.split(':')[0]*60 + (+x.split(':')[1])


    var adj={}
    for(t of times){
        if(!adj[s=t[0]]) adj[s]={}
        if(!adj[s][d=t[1]]) adj[s][d]=[]
        adj[s][d].push([S2T(t[2]), S2T(t[3])])
    }


    //sort flights from each source to each
    //destination by their arrival time
    for(s in adj)
        for(d in adj[s])
            adj[s][d].sort((a, b) => a[1]-b[1])


    //dfs all available flights
    var Q=[source], q, T={}, flight, dst
    T[source]=-60 //don't need 60 min cushion before the first flight

    while(q=Q.pop())
        for(dst in adj[q])
            for(flight of adj[q][dst])
                //flights were pre-sorted, so the first one we can get on
                //is our best option (unless even that is too late relative
                //to another path)
                if(flight[0] >= T[q]+60){
                    if(flight[1]<T[dst] || T[dst]==null){
                        T[dst]=flight[1]
                        Q.push(dst)
                    }

                    break
                }



    if(T[dest]==null) return '-1'
    var h=Math.floor(T[dest]/60), m=T[dest]%60
    return ''+(h<10 ? '0' : '') + h + ':' + (m<10 ? '0' : '')+m
}
