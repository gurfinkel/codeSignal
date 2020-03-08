string findProfession(int level, int pos) {
    if (1 == level) {
        return "Engineer";
    }
    if (findProfession(level - 1, (pos + 1) >> 1) == "Doctor"){
        return 1 == (pos & 1) ? "Doctor" : "Engineer";
    }
    return 1 == (pos & 1) ? "Engineer" : "Doctor";
}
