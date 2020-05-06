string[] findSubstrings(string[] words, string[] parts) {
    var trie = new Trie(parts);
    var list = new List<string>();

    foreach (string word in words) {
        int iStart, iEnd;
        LongestPart(word, trie, out iStart, out iEnd);
        list.Add(iStart != -1 ? word.Insert(iEnd + 1, "]").Insert(iStart, "[") : word);
    }

    return list.ToArray();
}

private void LongestPart(string word, Trie trie, out int iStart, out int iEnd) {
    iStart = iEnd = -1;

    for (int i = 0, longestLength = 0; i < word.Length; i++) {
        string suffix = word.Substring(i);
        int length = trie.LongestPrefix(suffix);

        if (length > longestLength) {
            longestLength = length;
            iStart = i;
            iEnd = iStart + length - 1;
        }
    }
}

private class Trie {
    internal class TrieNode {
        internal char Character { get; set; }
        internal bool EndOfWord { get; set; }
        internal Dictionary<char, TrieNode> Children { get; set; }

        internal TrieNode() {
            Character = '\0';
            Children = new Dictionary<char, TrieNode>();
            EndOfWord = false;
        }

        public TrieNode GetChild(char c) {
            return Children.ContainsKey(c) ? Children[c] : null;
        }

        public void AddChild(char c) {
            Children.Add(c, new TrieNode() { Character = c });
        }
    }

    private TrieNode Root { get; set; }

    public Trie(params string[] parts) {
        Root = new TrieNode();
        foreach (string part in parts)
            AddWord(part);
    }

    private void AddWord(string word) {
        var currentNode = Root;

        foreach (char c in word) {
            TrieNode node = currentNode.GetChild(c);
            if (node != null) currentNode = node;
            else {
                currentNode.AddChild(c);
                currentNode = currentNode.GetChild(c);
            }
        }
        currentNode.EndOfWord = true;
    }

    public int LongestPrefix(string word) {
        TrieNode current = Root;
        int length = 0;

        for (int i = 0; i < word.Length; i++) {
            char c = word[i];
            TrieNode node = current.GetChild(c);

            if (node == null)
                break;

            if (node.EndOfWord)
                length = i + 1;

            current = node;
        }

        return length;
    }
}
