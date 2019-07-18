function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let result = 0;
    let a = 0;

    while (desiredHeight > a) {
        a += upSpeed;

        if (desiredHeight <= a) return result + 1;

        a -= downSpeed;
        ++result;
    }

    return result
}
