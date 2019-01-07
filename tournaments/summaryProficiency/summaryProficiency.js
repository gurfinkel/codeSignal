function summaryProficiency(a, n, m) {
    let s = 0;

    a = a.filter(x => x >= m);
    
	for (let i = 0; n > i; ++i) {
		s += a[i];
    }
    
	return s;
}
