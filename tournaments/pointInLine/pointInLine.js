function pointInLine(point, line) {
    return !(line[0] * point[0] + line[1] * point[1] + line[2]);
}
