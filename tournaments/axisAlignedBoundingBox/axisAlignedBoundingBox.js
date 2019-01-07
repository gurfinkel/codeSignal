function axisAlignedBoundingBox(x, y) {

    var minX = x[0],
        maxX = x[0],
        minY = y[0],
        maxY = y[0];
  
    for (var i = 1; i < x.length; i++) {
      minX = Math.min(x[i], minX);
      maxX = Math.max(x[i], maxX);
      minY = Math.min(y[i], minY);
      maxY = Math.max(y[i], maxY);
    }
  
    return (maxX - minX) * (maxY - minY);
  }