function whoseMove(lastPlayer, win) {
    if ('white' === lastPlayer) {
        if (win) {
            return 'white';
        } else {
            return 'black';
        }
    } else {
        if (win) {
            return 'black';
        } else {
            return 'white';
        }
    }
}
