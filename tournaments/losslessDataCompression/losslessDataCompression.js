function losslessDataCompression(inputString, width) {
    var ret = "";
    for (var i = 0; i < inputString.length; i++) {
        var max = 0, start = 0;
        for (var left = Math.max(i - width, 0); left + max < i; left++) {
            for (var j = 0; left + j < i && inputString[left + j] == inputString[i + j]; )
                j++;
            if (j > max) {
                max = j;
                start = left;
            }
        }
        if (max > 0) {
            ret += `(${start},${max})`;
            i += max - 1
        } else {
            ret += inputString[i];
        }
    }
    return ret;
}
