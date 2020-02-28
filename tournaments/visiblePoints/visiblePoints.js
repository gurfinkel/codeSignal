// Compute each point's radian (adjust for negative radians)
// Sort them
// Repeat lowest 1/8 of circle at end (PI/4 radians)
// find sliding window count of max points

function visiblePoints(points) {
    var window = Math.PI/4;
    var R = 2*Math.PI;
    var P = points.map(p => (R+Math.atan2(p[1], p[0]))%R).sort((a,b) => a-b);
    P = [...P, ...P.filter(r => r <= window).map(p => p + R)];
    var i, j = 0;
    var m = 0;
    for (i = 0; i < points.length; i++) {
        for (; j < P.length && P[j] <= P[i]+window; j++);
        m = Math.max(m, j-i);
    }
    return m;
}
