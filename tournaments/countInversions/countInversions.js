function countInversions(a) {
    const merge = (sequence, left, middle, right) => {
        const store = [];
        let counter = 0;
        let leftIndex = left;
        let rightIndex = middle;

        while (middle > leftIndex || right > rightIndex) {
            if (middle === leftIndex) {
                store.push(sequence[rightIndex++]);
                continue;
            }

            if (right === rightIndex) {
                store.push(sequence[leftIndex++]);
                continue;
            }

            if (sequence[leftIndex] > sequence[rightIndex]) {
                store.push(sequence[leftIndex++]);
                counter += (right - rightIndex);
            } else {
                store.push(sequence[rightIndex++]);
            }
        }

        for (let i = left; right > i; ++i) {
            sequence[i] = store[i - left];
        }

        return counter;
    };

    const split = (sequence, left, right) => {
        if (1 === right - left) {
            return 0;
        }

        let middle = Math.floor((left + right) / 2);

        return split(sequence, left, middle) + split(sequence, middle, right) + merge(sequence, left, middle, right);
    };

    if (1 >= a.length) {
        return 0;
    }

    const mod = Math.pow(10, 9) + 7;

    return split(a, 0, a.length) % mod;
}
