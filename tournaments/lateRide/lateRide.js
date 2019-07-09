function lateRide(n) {
    const minutes = Math.floor(n / 60);
    const seconds = n - (Math.floor(n / 60) * 60);

    return Math.floor(minutes / 10) + (minutes % 10) + (seconds % 10) + Math.floor(seconds / 10);
}
