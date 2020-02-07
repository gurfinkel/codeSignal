function visiblePoints(p) {
    angles = []
    p.map(p => {
        x = p[0]
        y = p[1]
        angle = Math.asin(x / Math.sqrt(x*x + y*y)) * 180 / Math.PI
        angle = (y > 0 ? angle : 180 - angle) * 1e5 + .5 |0
        angles.push(angle)
        angles.push(360 * 1e5 + angle)
    })
    angles.sort((a,b) => a-b)

    max = 0
    i = j = 0
    while (j < angles.length) {
        if (angles[j] - angles[i] <= 45 * 1e5) {
            j++
        } else {
            if (max < j - i) max = j - i
            i++
        }
    }
    return max < j - i ? j - i : max
}
