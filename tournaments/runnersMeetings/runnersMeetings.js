function runnersMeetings(startPosition, speed) {
    let result = 1;

    for (let i = 0; i in startPosition; ++i) {
        for (let j = i + 1; j in startPosition; ++j) {
            let distDiff = startPosition[j] - startPosition[i];
            let speedDiff = speed[i] - speed[j];
            let cnt = 0;

            if(!speedDiff && distDiff) {
                continue;
            }

            for (let k = 0; k in startPosition; ++k) {
                if (startPosition[k] * speedDiff + speed[k] * distDiff
                    === startPosition[i] * speedDiff + speed[i] * distDiff) {
                    ++cnt;
                }
            }

            if (!cnt) {
                continue;
            }

            result = Math.max(result, cnt);
        }
    }

    if (2 > result) {
        result = -1;
    }

    return result;
}
