string[] fileNaming(string[] names) {
    var result = new List<string>();

    for (var i = 0; names.Length > i; ++i) {
        var str = names[i];

        if (result.Contains(str)) {
            var j = 1;

            while(result.Contains(str + "(" + (j) + ")")) {
                ++j;
            }
            str += "(" + j + ")";
        }

        result.Add(str);
    }

    return result.ToArray();
}
