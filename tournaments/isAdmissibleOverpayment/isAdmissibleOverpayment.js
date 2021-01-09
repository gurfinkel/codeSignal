function isAdmissibleOverpayment(prices, notes, x) {
    var diff = 0,
        i,
        price, note, orig;
    for (i in prices) {
        price = prices[i];
        note = notes[i].match(/(.*)% (lower|higher)/);
        if (note) {
            if (note[2] == 'higher') {
                orig = price * 100 / (100 - - note[1]);
            } else {
                orig = price * 100 / (100 - note[1]);
            }
        } else {
            orig = price;
        }
        diff += price - Math.round(orig * 1e6) / 1e6;
    }
    return x >= diff;
}
