function countSmallerToTheRight(nums) {
    const sortedIndex = function(array, value) {
        let low = 0;
        let high = array.length;

        while (low < high) {
            let mid = (low + high) >> 1;
            if (array[mid] < value) low = mid + 1;
            else high = mid;
        }

        return low;
    };

    const sorted = [];
    let sum = 0;

    while (nums.length) {
        const currNum = nums.pop();
        const index = sortedIndex(sorted, currNum);

        sorted.splice(index, 0, currNum);
        sum += index;
    }

    return sum;
}
