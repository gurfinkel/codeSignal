int[] theJanitor(string word) {
    var result = new int[26];

    foreach (var item in word) {
        result[item - 'a'] = 1 + word.LastIndexOf(item) - word.IndexOf(item);
    }

    return result;
}
