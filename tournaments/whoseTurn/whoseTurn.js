function whoseTurn(p) {
    const store = p.split(';').map(item => {
        return !((item.charCodeAt(0) - 'A'.charCodeAt(0) + +(item[1])) % 2);
    });
    
    return (store[0] ^ store[1]) === (store[2] ^ store[3])
}
