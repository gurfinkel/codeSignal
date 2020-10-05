bool launchSequenceChecker(string[] systemNames, int[] stepNumbers) {
    var store = new Dictionary<string, int>();

    for (int i = 0; systemNames.Length > i; ++i) {
        if (!store.ContainsKey(systemNames[i])) {
            store.Add(systemNames[i], stepNumbers[i]);
        } else {
            if (store[systemNames[i]] >= stepNumbers[i]) {
                return false;
            } else {
                store[systemNames[i]] = stepNumbers[i];
            }
        }
    }

    return true;
}
