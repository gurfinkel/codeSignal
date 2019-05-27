int[] houseOfCats(int legs) {
    var result = new List<int>();
    var count = legs >> 1;
    var start = 1 == (count & 1) ? 1 : 0;

    while (count >= start) {
        result.Add(start);
        start += 2;
    }

    return result.ToArray();
}
