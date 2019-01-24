function sequencePeakElement(sequence) {
    var left = 1;
    var right = sequence.length - 2;
    
    while (left < right) {
        var middle = Math.floor((left + right) / 2);
        if (sequence[middle] > Math.max(sequence[middle - 1], sequence[middle + 1])) {
            left = right = middle;
            break;
        }
        if (sequence[middle - 1] < sequence[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return sequence[left];
}
