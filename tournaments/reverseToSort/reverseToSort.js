function reverseToSort(inputArray) {
    const n = inputArray.length;

    for (let i = 0; n > i; ++i) {
        for (let j = i + 1; n >= j; ++j) {
            let left = inputArray.slice(0, i);
            let middle = inputArray.slice(i, j).reverse();
            let right = inputArray.slice(j, n);
            let a = 1;
            let result = [...left, ...middle, ...right];

            for (let k = 1; result.length > k; ++k) {
                if (result[k - 1] >= result[k]) {
                    a = 0;
                    break;
                }
            }

            if (a) return true;
        }
    }

    return false;
}
