function robotPath(instructions, bound) {
    var dx = [-1, 0, 1,  0],
        dy = [ 0, 1, 0, -1],
        directions = 'LURD',
        x = 0,
        y = 0;
  
    for (var i = 0; i < instructions.length; i++) {
        var dirIndex = 0;
        for (var j = 1; j < 4; j++) {
            if (instructions[i] === directions[j]) {
                dirIndex = j;
            }
        }
        if (Math.abs(x + dx[dirIndex]) <= bound && Math.abs(y + dy[dirIndex]) <= bound) {
            x += dx[dirIndex];
            y += dy[dirIndex] ;
        }
    }
  
    return [x, y];
  }
  