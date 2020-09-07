function serverFarm(jobs, servers) {
    var res = [], serverTimes = [];
    var highestI = jobs.indexOf(Math.max(...jobs));
    for(j=0;j<servers;j++){
        serverTimes.push(jobs[highestI])
        res.push([]);
        if(jobs[highestI]>0) res[j].push(highestI);
        jobs[highestI] = -Infinity
        highestI = jobs.indexOf(Math.max(...jobs));
    }
    for(i=0;i<jobs.length - servers; i++){
        var next = serverTimes.indexOf(Math.min(...serverTimes));
        highestI = jobs.indexOf(Math.max(...jobs));
        res[next].push(highestI);
        serverTimes[next] += jobs[highestI]
        jobs[highestI] = -Infinity
    }
    return res;
}
