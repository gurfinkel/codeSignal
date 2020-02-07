function correctNonogram(size, nonogramField) {
    var y = nonogramField.length;
    var x = nonogramField[0].length;

    //check columns
    for(var j = x - size; j < x; j++) {
        var nums = [];
        var num = 0;
        var expectedNums = [];

        for(var i = 0; i < y - size; i++) {
            var expectedNum = nonogramField[i][j];
            if(expectedNum != "-") expectedNums.push(expectedNum);
        }

        for(var i = y - size; i < y; i++) {
            var square = nonogramField[i][j] == "#";
            if(square) {
                num++
            } else {
                if(num) nums.push(num);
                num = 0;
            }
        }
        if(num) nums.push(num);

        if(expectedNums.join(",") != nums.join(",")) return false;
    }

    //check rows
    for(var i = y - size; i < y; i++) {
        var nums = [];
        var num = 0;
        var expectedNums = [];

        for(var j = 0; j < x - size; j++) {
            var expectedNum = nonogramField[i][j];
            if(expectedNum != "-") expectedNums.push(expectedNum);
        }

        for(var j = x - size; j < x; j++) {
            var square = nonogramField[i][j] == "#";
            if(square) {
                num++
            } else {
                if(num) nums.push(num);
                num = 0;
            }
        }
        if(num) nums.push(num);

        if(expectedNums.join(",") != nums.join(",")) return false;
    }

    return true;
}
