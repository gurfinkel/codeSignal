function climbingStaircase(n, k) {
    const climbingStaircaseRecursive = function(n, k, curr, result) {
        if (0 > n) {
            return;
        }

        if (!n) {
            result.push(curr);
            return;
        }

        let item = 0;

        while (k >= ++item) {
            climbingStaircaseRecursive(n - item, k, [...curr, item], result);
        }
    };

    const result = [];

    climbingStaircaseRecursive(n, k, [], result);

    return result;
}
