int[] chessClockSumOfDigits(string[] initialTime, int k) {
    int h1 = int.Parse(initialTime[0].Split('.')[0]);
    int s1 = int.Parse(initialTime[0].Split('.')[1]);
    int h2 = int.Parse(initialTime[1].Split('.')[0]);
    int s2 = int.Parse(initialTime[1].Split('.')[1]);
    int min = h1 + s1/10+s1%10 + h2 + s2/10+s2%10;
    int max = min;

    for (int i = 0; i <= k; i++) {
        int vh1 = h1 - i / 60;
        int vs1 = s1 - i % 60;

        if (vs1 < 0) {
            vs1 += 60;
            vh1--;
        }
        if (vh1 < 0 || (vs1 == 0 && vh1 == 0))
            break;

        for (int j = 0; i + j <= k; j++) {
            int vh2 = h2 - j / 60;
            int vs2 = s2 - j % 60;

            if (vs2 < 0) {
                vs2 += 60;
                vh2--;
            }

            int m = vh1 + vs1 / 10 + vs1 % 10;

            if (vh2 < 0 || (vs2 == 0 && vh2 == 0)) {
                if (max < m)
                    max = m;
                if (min > m)
                    min = m;
                break;
            }

            m += vh2 + vs2 / 10 + vs2 % 10;
            if (max < m)
                max = m;
            if (min > m)
                min = m;
        }
    }

    return new int[] { min, max };
}
