function whoseTurn(p) {
    const [k1, k2, k3, k4] = [...p.split(';').map(item => {
        return (item.charCodeAt(0) + +(item[1])) & 1;
    })];

    return (k1 ^ k2) === (k3 ^ k4);
}
