int axisAlignedCirclesBoundingBox(int[] x, int[] y, int[] r) {
    int minx=int.MaxValue, maxx=int.MinValue;
    int miny=int.MaxValue, maxy=int.MinValue;
    for (int i=0; i<x.Length; i++){
        if (r[i]+x[i]>maxx)maxx=r[i]+x[i];
        if (x[i]-r[i]<minx)minx=x[i]-r[i];
        if (r[i]+y[i]>maxy)maxy=r[i]+y[i];
        if (y[i]-r[i]<miny)miny=y[i]-r[i];
    }
    return (maxx-minx)*(maxy-miny);
}
