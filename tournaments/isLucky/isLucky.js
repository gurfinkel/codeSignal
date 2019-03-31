function isLucky(n) {
    const s = [...n.toString()].map(item => parseInt(item));
    return s.slice(0, s.length/2).reduce((a, b) => a+b, 0) === s.slice(s.length/2).reduce((a, b) => a+b, 0);
}

function isLucky(n) {
    let ok = false;
    let l = 0;
    let si = 0;
    let sf = 0;
    let tab = new Array();

    while (0 < n / 10) {
        tab[l] = n % 10;
        ++l;
        n = Math.trunc(n / 10);
    }

    --l;

    for(let i = 0; Math.trunc(l / 2) >= i; ++i) {
        si += tab[i];
        sf += tab[i + Math.trunc(l / 2) + 1];
    }

    if (si === sf) {
        ok = true;
    }
    
    return ok;
}
   