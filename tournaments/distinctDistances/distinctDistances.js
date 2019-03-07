function distinctDistances(distances) {
    let result = 1;

    if(distances[1] !== distances[0]) ++result;
    if(distances[1] !== distances[2]) ++result;
    if(distances[0] + distances[1] < distances[2]) ++result;

    return result;
}
