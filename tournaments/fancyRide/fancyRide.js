function fancyRide(l, fares) {
    return ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"][Math.max(...fares.map((v, i) => v*l <= 20 ? i : -1))];
}
