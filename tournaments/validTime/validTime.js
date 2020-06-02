function validTime(time) {
    return (24 > 10 * (+time[0]) + (+time[1]) && 60 > 10 * (+time[3]) + (+time[4]));
}
