string[] splitAddress(string address) {
    string[] a = address.Split('/');
    var e = new List<string>();
    e.Add(a[0].Substring(0, a[0].Length - 1));
    string[] b = a[2].Split('.');
    e.Add(b[0]);
    if (a.Length > 3)
        e.Add(a[3]);
    return e.ToArray();
}