function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    let height = 0;

    while (height < desiredHeight) {
        height += upSpeed;

        if (height >= desiredHeight) { 
            return days + 1;
        }

        height -= downSpeed;
        ++days;
    }

    return days
}
