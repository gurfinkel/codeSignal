function toAndFro(a, b, t) {
    const l = b - a;
    const m = 0 > l ? -t % l : t % l;
    return t / l & 1 ? b - m : a + m;
}
