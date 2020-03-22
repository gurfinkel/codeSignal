string reverseSentence(string sentence) {
    var store = sentence.Split(" ");
    var stack = new Stack<string>();

    foreach (var word in store) {
        stack.Push(word);
    }

    return string.Join(" ", stack);
}
