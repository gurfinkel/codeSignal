double[] quadraticEquation(int a, int b, int c) {
    int discriminant =  b*b - 4 * a * c;
    if (0 > discriminant) {
        return new double[0];
    }
    
    if (0 == discriminant) {
        return new double[] {(-b / (2.0 * a))};
    }
    
    var result = new List<double>();
    result.Add((-b - Math.Sqrt(discriminant)) / (2.0 * a));
    result.Add((-b + Math.Sqrt(discriminant)) / (2.0 * a));
    
    if (result[0] > result[1]) {
        var temp = result[1];
        result[1] = result[0];
        result[0] = temp;
    }
    
    return result.ToArray();
}
