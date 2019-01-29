int[] threeAndFour(int n) {
    var result = new List<int> {0};
    var item = 12;
    
    while (item < n) {
        if (0 == item % 3 && 0 == item % 4) {
            result.Add(item);
        }
        ++item;
    }
    
    return result.ToArray();
}
