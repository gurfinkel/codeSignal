int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
    var result = 1;
    
    if (upSpeed >= desiredHeight) {
        return result;
    }
    
    var height = upSpeed;
    var diff = upSpeed - downSpeed;
    
    while (desiredHeight > height) {
        height += diff;
        ++result;
    }
    
    return result;
}
