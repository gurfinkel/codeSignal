function sortedSquaredArray(array) {
    const squares = [];
    let [l, r] = [0, array.length - 1];

    while(l <= r) {
        if(array[l] ** 2 > array[r] ** 2) squares.push(array[l++] ** 2);
        else squares.push(array[r--] ** 2);
    }

    return squares.reverse();
}
