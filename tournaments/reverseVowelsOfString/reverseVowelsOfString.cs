string reverseVowelsOfString(string s) {
    var store = new HashSet<char>(new char[] {'a', 'e', 'i', 'o', 'u'});
    var queue = new Queue<char>();
    var stack = new Stack<char>();
    var result = new List<char>();

    foreach (var letter in s) {
        if (store.Contains(char.ToLower(letter))) {
            stack.Push(letter);
            queue.Enqueue('$');
        } else {
            queue.Enqueue(letter);
        }
    }

    foreach (var letter in queue) {
        if ('$' == letter) {
            result.Add(stack.Pop());
        } else {
            result.Add(letter);
        }
    }

    return string.Join("", result);
}
