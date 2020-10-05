function parkingSpot(carDimensions, parkingLot, luckySpot) {
    var UL = [luckySpot[0], luckySpot[1]];
    var BR = [luckySpot[2], luckySpot[3]];
    var W = carDimensions[1];
    var L = carDimensions[0];
    
    const isOccupied = function(point) {
        return parkingLot[point[0]][point[1]] === 1;
    };
    
    const isCarFitSpace = function() {
        for(var x = 0; x <= BR[0] - UL[0]; x++) {
            for(var y = 0; y <= BR[1] - UL[1]; y++){
                var coord = [UL[0]+x, UL[1]+y];
                var occ = isOccupied(coord);
                if(occ) return false;
            }
        }
        return true;
    };
    
    const isCarCouldMoveIn = function() {
        // check mode
        const HORIZONTAL = 'h';
        const VERTICAL = 'v';
        const BEFORE = 'b';
        const AFTER = 'a';
        
        const getPath = function(mode, dir) {
            var outputs = [];
            var iStart = 0;
            if(mode === HORIZONTAL){
                var iEnd = UL[1];
                var iBase = UL[0];
                if(dir === AFTER){
                    iStart = BR[1] + 1;
                    iEnd = parkingLot[UL[0]].length;
                    if(iStart >= iEnd) return outputs;
                }
            }else{
                var iEnd = UL[0];
                var iBase = UL[1];
                if(dir === AFTER){
                    iStart = BR[0] + 1;
                    iEnd = parkingLot.length;
                    if(iStart >= iEnd) return outputs;
                }
            }
            for(var i = 0; i < W; i++){
                for(var y = iStart; y < iEnd; y++) {
                    outputs.push([iBase + i, y])
                }
            }
            return outputs;
        };
        
        var mode = HORIZONTAL;
        if(BR[0] - UL[0] > BR[1] - UL[1]) {
            mode = VERTICAL;
        }
        
        const isClean = function(arr) {
            for(var i = 0; i < arr.length; i++){
                if(isOccupied(arr[i])) return false;
            }
            return true;
        }
        
        var before = getPath(mode, BEFORE);
        var after = getPath(mode, AFTER);
        
        return isClean(before) || isClean(after);
    };
    
    var isOK = isCarFitSpace(parkingLot, UL, BR);
    
    if(isOK) {
        console.log('Car could fit the provided space');
        isOK = isCarCouldMoveIn();
        if(isOK) {
            console.log('Card could move in')
        } else {
            console.log('Card could not move in')
        }
    } else {
        console.log('Car could not fit the provided space');
    }
    
    return isOK;
}
