function fileSyncOrder(files, storageLimit, uploadSpeed, duration) {
    var time        = 0,
        queue       = [],
        syncedFiles = [],
        storageUsed = 0,
        i           = 0,
        s, t, j;

    while ((i < files.length || queue.length) && time < duration && storageUsed < storageLimit) {
        // skip idle time
        if (files[i] && time < files[i][1])
            time = files[i][1];
        // add files to queue where addTime <= current time
        while (files[i] && files[i][1] <= time) {
            queue.push([...files[i], i]);
            i++;
        }
        // sort the queue. upload smallest file first
        queue.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

        // get the next file parameters from the queue
        [s, t, j] = queue.shift();
        // check the storage and time limits
        if (storageUsed + s <= storageLimit && time + s / uploadSpeed <= duration) {
            // if possible to sync, than sync
            storageUsed += s;
            time += s / uploadSpeed;
            syncedFiles.push(j);
        }
    }
    return syncedFiles;
}
