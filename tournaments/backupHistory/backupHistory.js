function backupHistory(creationTimes, backupRequests, k, t) {
    // it's O(n log n) algo because of the sort

    var counts = [...creationTimes].fill(0),
        stop   = [...creationTimes].fill(t),
        overlap= [...creationTimes].fill(0);

    // sort the requests by time
    backupRequests.sort((a, b) => a[2] - b[2]);
    // valk on the request and process them
    for (var i = 0; i < backupRequests.length; i++) {
        var [type, id, time] = backupRequests[i];

        // if request over than t, ignore it
        if (time > t) continue;

        // manual backup
        if (type == 1) {
            // increase counts for the file
            counts[id]++;
            // check the overlap with the automatic backup, and increase overlap count if overlapped
            if ((time - creationTimes[id]) % k == 0 && time > creationTimes[id] && time <= stop[id])
                overlap[id]++;
            // save stop request time if less than current stop (default: t)
        } else if (stop[id] > time - 1) {
            stop[id] = time - 1;
        }
    }
    // calculate the count of automatic backups and remove the overlaps
    for (i = 0; i < creationTimes.length; i++) {
        var n = (stop[i] - creationTimes[i]) / k | 0
        if (n > 0)
            counts[i] += n - overlap[i];
    }
    return counts
}
