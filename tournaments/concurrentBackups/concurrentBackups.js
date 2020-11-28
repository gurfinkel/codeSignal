function concurrentBackups(threads, documents) {
    var sum = 0;
    for (var i in documents)
        sum += documents[i];
    var max = Math.max(Math.ceil(sum / threads), ...documents);
    
    documents.sort((a, b) => b - a);
    
    i = 0;
    while (i < documents.length) {
        var list = Array(threads).fill(max),
            i = 0,
            j = 0;
        while (i < documents.length) {
            if (list[j] < documents[i]) {
                j++;
                if (j == threads)
                    break;
            } else {
                list[j] -= documents[i];
                i++;
                j = 0;
            }
        }
        if (i < documents.length) max++;
    }
    return max;
}
