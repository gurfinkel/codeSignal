int arrayConversion(int[] inputArray) {
    var n = inputArray.Length;
    var result = inputArray.ToList();

    while (1 < result.Count) {
        result = getResult(result);
    }

    return result[0];
}

List<int> getResult(List<int> a) {
    var n = a.Count;
    var result = new List<int>();

    if (1 == n % 4) {
        a.Add(0);
        a.Add(1);
        a.Add(0);
    } else if (2 == n % 4) {
        a.Add(1);
        a.Add(0);
    } else if (3 == n % 4) {
        a.Add(0);
    }

    for (int i = 0; a.Count > i; i+=4) {
        result.Add((a[i] + a[i + 1]) * (a[i + 2] + a[i + 3]));
    }

    return result;
}
