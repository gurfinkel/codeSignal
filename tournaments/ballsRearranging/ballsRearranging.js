function ballsRearranging(balls) {
    const n = balls.length;
    let m = n;
    let i = 0;
    let j = 0;

    balls.sort((a, b) => a - b);

    while (n > i) {
        balls[j] - balls[i] < n ? j++ : i++;
        m = Math.min(m, i + n - j);
    }

    return m;
}
