bool arePrizesOK(int first, int second, int third) {
    if (first < second) {
        return false;
    }
    if (second < third) {
        return false;
    }
    return true;
}
