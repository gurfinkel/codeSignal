function equidistantTriples(coordinates) {
    let ans = 0;

    for (let i = 1; i < coordinates.length - 1; i++) {
        let left = i - 1;
        let right = i + 1;

        while (left >= 0 && right < coordinates.length) {
            var distL = coordinates[i] - coordinates[left];
            var distR = coordinates[right] - coordinates[i];

            if (distL === distR) {
                ans++;
                left--;
                right++;
            } else if (distL < distR) {
                left--;
            } else {
                right++;
            }
        }
    }
  
    return ans;
}  
  