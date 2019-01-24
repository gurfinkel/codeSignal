bool insideCircle(int[] point, int[] center, int radius) {
    return (center[0]-point[0])*(center[0]-point[0])+(center[1]-point[1])*(center[1]-point[1])<=radius*radius;
}
