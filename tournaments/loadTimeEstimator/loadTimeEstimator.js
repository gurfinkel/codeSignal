function loadTimeEstimator(sizes, uploadingStart, v) {
    var files  = [],
        queue  = [],
        finish = [],
        time  = 0,
        i, min, next, sec;
    for (i in sizes)
        files[i] = {id: i, size: sizes[i], start: uploadingStart[i]};

    files.sort((a, b) => a.start - b.start);

    i = 0;
    while (i < files.length || queue.length) {
        if (queue.length == 0) {
            time = files[i].start;
        }
        while (i < files.length && files[i].start == time) {
            queue.push(files[i]);
            i++;
        }
        min  = Math.min(...queue.map(vel => vel.size));
        next = Math.min(...files.map(vel => vel.start > time ? vel.start : 1e9));
        sec  = Math.min(min / (v / queue.length), next - time);
        time += sec;
        queue = queue.map(vel => {
            vel.size -= sec * v / queue.length;
            if (vel.size == 0)
                finish[vel.id] = Math.ceil(time);
            return vel
        });
        queue = queue.filter(vel => vel.size);
    }
    return finish;
}
