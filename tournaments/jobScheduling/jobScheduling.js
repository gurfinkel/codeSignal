function jobScheduling(requestTime, jobProcess, timeFromStart) {
    var time = 0,
        queue = [],
        i = 0, j,
        finished = false;
    while (time < timeFromStart) {
        if (queue.length == 0) {
            if (requestTime[i] + jobProcess[i] <= timeFromStart) {
                time = requestTime[i] + jobProcess[i];
                finished = true;
            } else {
                time = timeFromStart;
                finished = false;
            }
            i++
        } else {
            j = queue.shift()
            if (time + jobProcess[j] <= timeFromStart) {
                time +=  jobProcess[j];
                finished = true;
            } else {
                time = timeFromStart;
                finished = false;
            }
        }
        while (time >= requestTime[i]) {
            queue.push(i)
            i++
        }
        queue.sort((a, b) => jobProcess[a] - jobProcess[b]);
    }
    if (finished) queue.shift();
    return queue;
}
