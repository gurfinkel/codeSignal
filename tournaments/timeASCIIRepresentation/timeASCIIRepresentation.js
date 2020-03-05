function timeASCIIRepresentation(t) {
    nums = [75557,22222,71747,71717,55711,74717,74757,71111,75757,75717]
    h = m = 0;
    [1, 5].map(x => {
        n = 0;
        [0, 4, 8, 12, 16].map(y => {
            v = 0;
            [0,1,2].map(z => v += t[y][x + z] == '*' ? v + 1 : v)
            n = n * 10 + v
        })
        h = h * 10 + nums.indexOf(n)
    });
    [10, 14].map(x => {
        n = 0;
        [0, 4, 8, 12, 16].map(y => {
            v = 0;
            [0,1,2].map(z => v += t[y][x + z] == '*' ? v + 1 : v)
            n = n * 10 + v
        })
        m = m * 10 + nums.indexOf(n)
    })
    console.log(h, m)

    /* init the clock, write the circle */
    clock = [];
    dl = (8.5 - Math.sqrt(0.5)) ** 2
    dh = (8.5 + Math.sqrt(0.5)) ** 2
    for (y = -8; y <= 8; y++) {
        r = []
        for (x = -8; x <= 8; x++)
            r.push(x * x + y * y > dl && x * x + y * y < dh ? '*' : '.')
        clock.push(r)
    }

    /* calculate the degree of the hours */
    x1 = 8
    y1 = 8
    yh = Math.sin(((h % 12 * 30 + m / 2) + 270) % 360 * Math.PI / 180) * 8.5
    xh = Math.cos(((h % 12 * 30 + m / 2) + 270) % 360 * Math.PI / 180) * 8.5
    ym = Math.sin(((m * 6) + 270) % 360 * Math.PI / 180) * 8.5
    xm = Math.cos(((m * 6) + 270) % 360 * Math.PI / 180) * 8.5
    console.log([yh, xh], [ym, xm])
    for (y = -8; y <= 8; y++) {
        for (x = -8; x <= 8; x++) {
            if (y ** 2 + x ** 2 > 8.5 ** 2) continue;
            x2 = yh ? y / yh * xh : 0
            y2 = xh ? x / xh * yh : 0
            a = Math.abs(x - x2)
            b = Math.abs(y - y2)
            c = Math.sqrt(a ** 2 + b ** 2)
            h = a > 0 && b > 0 ? a / c * b : c
            if (yh * y2 >= 0 && xh * x2 >= 0 && h < Math.sqrt(.4999)) {
                clock[y+8][x+8] = '*'
//				console.log([yh, xh], [y, x], [y2, x2], a, b, c, h)
            }

            x2 = ym ? y / ym * xm : 0
            y2 = xm ? x / xm * ym : 0
            a = Math.abs(x - x2)
            b = Math.abs(y - y2)
            c = Math.sqrt(a ** 2 + b ** 2)
            h = a > 0 && b > 0 ? a / c * b : c
            if (ym * y2 >= 0 && xm * x2 >= 0 && h < Math.sqrt(.4999)) {
                clock[y+8][x+8] = '*'
//				console.log([ym, xm], [y, x], [y2, x2], a, b, c, h)
            }
        }
    }
    console.log(clock.map((v, i) => v.join``))
    return clock
}
