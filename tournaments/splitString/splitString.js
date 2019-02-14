function splitString(str) {
    var re = /\w+\s/g;
    var slicedArray = (str + ' ').match(re);
    if (!slicedArray){
        return [];
    }
    for (var i = 0; i < slicedArray.length; i++){
        slicedArray[i] = slicedArray[i].slice(0,-1);
    }
    return slicedArray;
}
