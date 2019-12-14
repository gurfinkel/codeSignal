function parkingCost(timeIn, timeOut) {
    const timeOutNorm = parseInt(timeOut) * 60 + parseInt(timeOut.substr(3));
    const timeInNorm = parseInt(timeIn) * 60 + parseInt(timeIn.substr(3));
    const d = timeOutNorm - timeInNorm;
    
    if (30 >= d) {
        return 0;
    } else if (120 >= d) {
        return ~~((d - 21) / 10);
    } else {
        return 9 + ~~((d - 111) / 10) * 2;
    }
}
