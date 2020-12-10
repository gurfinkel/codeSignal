function packetDescrambler(seq, fragmentData, n) {
    var len = Math.max(...seq),
        data = Array(len),
        response = "",
        i, j;
    for (i in seq) {
        if (data[seq[i]])
            if (data[seq[i]][fragmentData[i]])
                data[seq[i]][fragmentData[i]]++;
            else
                data[seq[i]][fragmentData[i]] = 1;
        else {
            data[seq[i]] = {}
            data[seq[i]][fragmentData[i]] = 1;
        }
    }
    for (i of data)
        for (j in i)
            if (i[j] + i[j] > n) response += j
    return response.indexOf("#") == len ? response : ""
}
