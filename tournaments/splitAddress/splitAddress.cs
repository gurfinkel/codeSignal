string[] splitAddress(string address) {
    var result = new List<string>();
    var tokens = address.Split('/');

    result.Add(tokens[0].Substring(0, tokens[0].Length - 1));
    result.Add(tokens[2].Split('.')[0]);

    if (3 < tokens.Length) {
        result.Add(tokens[3]);
    }

    return result.ToArray();
}
