function runningWater(cap, volume) {
    const [a, b, c] = [...cap];

    f = (x, y, z) =>
        x + y + z == volume || !f[i = x << 16 | y << 8 | z] &&
        (f[i] = 1,
            f(0, y, z) ||
            f(x, y, 0) ||
            f(x, y, 0) ||
            f(Math.min(a, x + y), Math.max(0, y + x - a), z) ||
            f(Math.min(a, x + z), y, Math.max(0, z + x - a)) ||
            f(Math.max(0, x + y - b), Math.min(b, y + x), z) ||
            f(x, Math.min(b, y + z), Math.max(0, z + y - b)) ||
            f(Math.max(0, x + z - c), y, Math.min(c, z + x)) ||
            f(x, Math.max(0, y + z - c), Math.min(c, z + y))
        )

    return f(a, b, c, volume);
}
