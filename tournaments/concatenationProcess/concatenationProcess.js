function concatenationProcess(initialArray) {
    const f = function(a) {
        return a
            .reverse()
            .splice(a.map((b,i) => j = !i || b.length <= a[j].length ? i : j) | j,1)[0];
    };

    return initialArray[1] + 1 ?
        concatenationProcess(initialArray, initialArray.push(f(initialArray)+f(initialArray))) :
        f(initialArray);
}

/* 160:
b = []
g = x => b.find(a => a && a.length)
h = s => b[l = s.length] = [...(b[l] || []), s]
f = i =>
    --i
        ? f(i, h(g().shift() + g().pop()))
        : g() + ""
concatenationProcess = a => f(a.map(a => h(a)).length)
*/