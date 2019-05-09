bool variableName(string name) {
    var pattern = @"^[a-zA-Z_]+[a-zA-Z_0-9]*$";
    Match match = Regex.Match(name, pattern);

    return match.Success;
}
