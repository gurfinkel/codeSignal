function columnTitle(number) {
    const aCode = 'A'.charCodeAt(0);
    const store = [];
    
    while (number--) {
        store.unshift(String.fromCharCode(aCode + number % 26));
        number = ~~(number / 26);
    }
    
    return store.join('');
}
