bool robotWalk(std::vector<int> a) {
    int minX = 0;
    int minY = -1;
    int maxX = INT_MAX;
    int maxY = INT_MAX;

    int x = 0;
    int y = 0;

    for (int i = 0; i < a.size(); i++) {
        switch (i % 4) {

        case 0:
            y += a[i];
            if (y >= maxY) {
                return true;
            }
            maxY = y;
            break;

        case 1:
            x += a[i];
            if (x >= maxX) {
                return true;
            }
            maxX = x;
            break;

        case 2:
            y -= a[i];
            if (y <= minY) {
                return true;
            }
            minY = y;
            break;

        case 3:
            x -= a[i];
            if (x <= minX) {
                return true;
            }
            minX = x;
            break;
        }
    }

    return false;
}
