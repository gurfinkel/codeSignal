int areaOfIntersection(int[] shape1, int[] shape2) {
    SortedDictionary<int, HashSet<int>> s1 = new SortedDictionary<int, HashSet<int>>();
    SortedDictionary<int, HashSet<int>> s2 = new SortedDictionary<int, HashSet<int>>();
    for (int i = 0; i < shape1[0]; i++)
    {
        s1.Add(shape1[1] + i, new HashSet<int>());
        if (!s1.ContainsKey(shape1[1] - i))
            s1.Add(shape1[1] - i, new HashSet<int>());
        for (int j = 0; j < shape1[0] - i; j++)
        {
            s1[shape1[1] + i].Add(shape1[2] + j);
            s1[shape1[1] + i].Add(shape1[2] - j);
            s1[shape1[1] - i].Add(shape1[2] + j);
            s1[shape1[1] - i].Add(shape1[2] - j);
        }
    }
    for (int i = 0; i < shape2[0]; i++)
    {
        s2.Add(shape2[1] + i, new HashSet<int>());
        if (!s2.ContainsKey(shape2[1] - i))
            s2.Add(shape2[1] - i, new HashSet<int>());
        for (int j = 0; j < shape2[0] - i; j++)
        {
            s2[shape2[1] + i].Add(shape2[2] + j);
            s2[shape2[1] + i].Add(shape2[2] - j);
            s2[shape2[1] - i].Add(shape2[2] + j);
            s2[shape2[1] - i].Add(shape2[2] - j);
        }
    }
    HashSet<int> k1 = new HashSet<int>(s1.Keys);
    HashSet<int> k2 = new HashSet<int>(s2.Keys);
    HashSet<int> inter = new HashSet<int>(k1.Intersect(k2));
    int r = 0;
    foreach (int k in inter)
        r += s1[k].Intersect(s2[k]).Count();
    return r;
}