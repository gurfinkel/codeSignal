function bomber(field) {
    if(field.length === 0)  return 0;
    const [height, width] = [field.length, field[0].length];

    for(let i = 0 ; i < height ; i++){
        const colStack = [];
        let enemies = 0;
        for(let j = 0 ; j < width ; j++){
            const tile = field[i][j];
            if(tile === "E")    enemies++;
            if(tile === "0")    colStack.push(j);
            if(tile === "W"){
                while(colStack.length){
                    field[i][colStack.pop()] = enemies;
                }
                enemies = 0;
            }
        }

        while(colStack.length){
            field[i][colStack.pop()] = enemies;
        }
    }

    for(let j = 0 ; j < width ; j++){
        let enemies = 0;
        const rowStack = [];

        for(let i = 0 ; i < height ; i++){
            const tile = field[i][j];
            if(tile === "E")    enemies++;
            if(/\d/.test(tile))    rowStack.push(i);
            if(tile === "W"){
                while(rowStack.length){
                    field[rowStack.pop()][j] += enemies;
                }

                enemies = 0;
            }
        }

        while(rowStack.length){
            field[rowStack.pop()][j] += enemies;
        }
    }
    let best = 0;
    for(let i = 0 ; i < height ; i++){
        for(let j = 0 ; j < width ; j++){
            if(/\d/.test(field[i][j]))  best = Math.max(best, field[i][j]);
        }
    }

    return best;
}
