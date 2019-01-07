std::vector<int> robotPath(std::string instructions, int bound) {
    int dx[4] = {-1, 0, 1,  0},
        dy[4] = { 0, 1, 0, -1},
        x = 0,
        y = 0;

    std::string directions = "LURD";

    for (int i = 0; i < instructions.size(); i++) {
        int dirIndex = 0;
        for (int j = 1; j < 4; j++) {
            if (instructions[i] == directions[j]) {
                dirIndex = j;
            }
        }
        if (std::abs(x + dx[dirIndex]) <= bound && std::abs(y + dy[dirIndex]) <= bound) {
            x += dx[dirIndex];
            y += dy[dirIndex] ;
        }
    }

    std::vector<int> res(2);
    res[0] = x, res[1] = y;
    
    return res;
}
