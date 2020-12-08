string[] domainType(string[] domains) {
    var result = new List<string>();

    foreach (var item in domains) {
        var next = "information";

        var temp = item.Substring(item.LastIndexOf('.'), item.Length - item.LastIndexOf('.'));

        if (temp == ".com") {
            next = "commercial";
        } else if (temp == ".net") {
            next = "network";
        } else if (temp == ".org") {
            next = "organization";
        }

        result.Add(next);
    }

    return result.ToArray();
}
