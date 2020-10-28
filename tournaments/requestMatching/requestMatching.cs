string[] requestMatching(string[] pros, int[] distances, int[] travelPreferences) {
    Dictionary<string, int> matchingDistances = new Dictionary<string, int>();
    Dictionary<string, int> nonMatchingDistances = new Dictionary<string, int>();

    for (int i = 0; i < pros.Length; i++) {
        if (distances[i] <= travelPreferences[i]) {
            matchingDistances.Add(pros[i], distances[i]);
        } else {
            nonMatchingDistances.Add(pros[i], Math.Abs(distances[i] - travelPreferences[i]));
        }
    }

    List<string> matchingDistancesList = matchingDistances.OrderBy(a => a.Value).ThenBy(b => b.Key, StringComparer.Ordinal).Select(c => c.Key).ToList();
    List<string> nonMatchingDistancesList = nonMatchingDistances.OrderBy(a => a.Value).ThenBy(b => b.Key, StringComparer.Ordinal).Select(c => c.Key).ToList();

    if (pros.Length <= 5) {
        return matchingDistancesList.Union(nonMatchingDistancesList).ToArray();
    } else {
        if (matchingDistancesList.Count() >= 5) {
            return matchingDistancesList.Take(5).ToArray();
        } else {
            return matchingDistancesList.Union(nonMatchingDistancesList.Take(5 - matchingDistancesList.Count())).ToArray();
        }
    }
}
