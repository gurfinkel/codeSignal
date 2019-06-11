function fastSymmetrization(a) {
    const rows = a.length - 1;
    const cols = a[0].length - 1;

    for (let i = 0; rows >= i; ++i)
        for (let j = 0; cols >= j; ++j) {
            const store = new Set([a[i][j], a[i][cols - j], a[rows - i][j], a[rows - i][cols - j]]);
            if (1 !== store.size) {
              store.delete('*');
              if (1 !== store.size) return [];
              const item = store.values().next().value;
              a[i][j] = a[i][cols - j] = a[rows - i][j] = a[rows - i][cols - j] = item;
            }
        }

    return a;
}
