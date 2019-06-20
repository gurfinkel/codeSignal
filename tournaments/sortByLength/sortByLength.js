function sortByLength(inputArray) {
    const comparer = function(a, b) {
        return a.length <= b.length;
    };

    const merge = function(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;

        if (comparer(a[0], b[0])) {
            return [a[0], ...merge(a.slice(1), b)];
        } else {
            return [b[0], ...merge(a, b.slice(1))];
        }
    };

    const mergeSort = function (sequence) {
        if (1 === sequence.length) return sequence;

        const middle = ~~(sequence.length / 2);
        const leftPart = sequence.slice(0, middle);
        const rightPart = sequence.slice(middle);

        return merge(mergeSort(leftPart), mergeSort(rightPart));
    };

    return mergeSort(inputArray);
}
