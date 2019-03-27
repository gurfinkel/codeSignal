function checkSameElementExistence(arr1, arr2) {
    const l1 = arr1.length;
    const l2 = arr2.length;
    let i1 = 0;
    let i2 = 0;

    while (l1 > i1 && l2 > i2) {
        if (arr1[i1] === arr2[i2]) return true;
        if (arr1[i1] < arr2[i2]) ++i1;
        else if (arr1[i1] > arr2[i2]) ++i2;
    }

    return false;
}
