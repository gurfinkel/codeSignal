function liquidMixing(densities) {
    var result = [densities[0]];
    for (var i = 1; i < densities.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (densities[i] <= densities[j]) {
                var tmp = densities[i];
                for (var k = i; k > j; k--) {
                    densities[k] = densities[k - 1];
                }
                densities[j] = tmp;
                if (i % 2 === 1) {
                    result.push((densities[(i + 1) / 2] + densities[(i - 1) / 2]) / 2);
                } else {
                    result.push(densities[i / 2]);
                }
                break;
            }
        }
    }
    return result;
}  
  