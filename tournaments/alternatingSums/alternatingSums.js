function alternatingSums(a) {
    let teamA = 0;
    let teamB = 0;

    for (let i = 0; a.length > i; ++i) {
        if (i & 1) teamB += a[i];
        else teamA += a[i];
    }

    return [teamA, teamB];
}
