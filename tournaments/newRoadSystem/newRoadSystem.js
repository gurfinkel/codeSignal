function newRoadSystem(roadRegister) {
    const n = roadRegister.length;
    const store = Array(n).fill(0);

    for (let i = 0; n > i; ++i) {
        for (let j = 0; n > j; ++j) {
            if (i !== j && roadRegister[i][j]) {
                ++store[i];
                --store[j];
            }
        }
    }

    for (const item of store) {
        if (item) {
            return false;
        }
    }

    return true;
}
