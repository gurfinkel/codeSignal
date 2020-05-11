function fractal(n) {
    var size = (1 << n) - 1;
    result = Array(size);
    resultTmp = Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = Array(size);
        resultTmp[i] = Array(size);
        for (var j = 0; j < size; j++) {
            result[i][j] = 0;
            resultTmp[i][j] = 0;
        }
    }
    var draw = function(n, row, column, angle) {
        var size = (1 << n) - 1;
        if (angle !== 0) {
            draw(n, row, column, 0);
            while (angle > 0) {
                angle--;
                for (var i = 0; i < size; i++) {
                    for (var j = 0; j < size; j++) {
                        var x = result[row + i][column + j];
                        var i0 = j;
                        var j0 = size - i - 1;
                        resultTmp[row + i0][column + j0] = (x >> 1) | ((x &
                            1) << 3);
                    }
                }
                for (var i = row; i < row + size; i++) {
                    for (var j = column; j < column + size; j++) {
                        result[i][j] = resultTmp[i][j];
                    }
                }
            }
            return;
        }
        if (n === 1) {
            result[row][column] = (1 << 3) - 1;
            return;
        }
        var add = Math.floor(size / 2) + 1;
        draw(n - 1, row, column, 0);
        if (n % 2 === 1) {
            draw(n - 1, row + add, column, 2);
            draw(n - 1, row, column + add, 3);
            draw(n - 1, row + add, column + add, 3);
            result[row][column + add - 1] |= (1 << 2);
            result[row + add - 1][column + add] |= (1 << 3);
            result[row + size - 1][column + add - 1] |= (1 << 0);
        } else {
            draw(n - 1, row + add, column, 1);
            draw(n - 1, row, column + add, 2);
            draw(n - 1, row + add, column + add, 1);
            result[row + add - 1][column] |= (1 << 3);
            result[row + add][column + add - 1] |= (1 << 2);
            result[row + add - 1][column + size - 1] |= (1 << 1);
        }
    }
    draw(n, 0, 0, 0);
    var answer = Array(size + 1);
    for (var i = 0; i < answer.length; i++) {
        answer[i] = Array((size + 1) * 2 - 1);
        for (var j = 0; j < answer[i].length; j++) {
            answer[i][j] = 0;
        }
    }
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var cell = result[i][j];
            if ((cell >> 2) % 2 === 1) {
                answer[i][j * 2 + 1] = '_';
            }
            if ((cell >> 0) % 2 === 1) {
                answer[i + 1][j * 2 + 1] = '_';
            }
            if ((cell >> 3) % 2 === 1) {
                answer[i + 1][j * 2] = '|';
            }
            if ((cell >> 1) % 2 === 1) {
                answer[i + 1][j * 2 + 2] = '|';
            }
        }
    }
    for (var i = 0; i < size + 1; i++) {
        for (var j = 0; j < (size + 1) * 2 - 1; j++) {
            if (answer[i][j] === 0) {
                answer[i][j] = ' ';
            }
            if (answer[i][j] === ' ' && j > 0 && answer[i][j - 1] === '_' && j +
                1 < answer[i].length && answer[i][j + 1] === '_') {
                answer[i][j] = '_';
            }
        }
    }
    return answer;
}
