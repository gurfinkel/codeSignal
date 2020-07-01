int countElements(string inputString) {
    var stringRegex = new Regex("\".*?\"");
    var stringMatches = stringRegex.Matches(inputString);
    foreach (var strMatch in stringMatches)
    {
        inputString = inputString.Replace(((Match)strMatch).Value, string.Empty);
    }
    var boolCount = Regex.Matches(inputString, "true").Count + Regex.Matches(inputString, "false").Count;
    var numberCount = Regex.Matches(inputString, "\\d+").Count;

    return stringMatches.Count + boolCount + numberCount;
}
