//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   public T value { get; set; }
//   public Tree<T> left { get; set; }
//   public Tree<T> right { get; set; }
// }
bool isSubtree(Tree<int> a, Tree<int> b) {
    if (null == b) {
        return true;
    }

    if (null == a && null != b) {
        return false;
    }

    /*var aInOrderStore = new List<int>();
    var aPreOrderStore = new List<int>();
    var bInOrderStore = new List<int>();
    var bPreOrderStore = new List<int>();

    inOrder(a, aInOrderStore);
    preOrder(a, aPreOrderStore);
    inOrder(b, bInOrderStore);
    preOrder(b, bPreOrderStore);

    var aInOrderString = String.Join(',', aInOrderStore);
    var bInOrderString = String.Join(',', bInOrderStore);

    if (0 == KmpSearch(bInOrderString, aInOrderString).Length) {
        return false;
    }

    var aPreOrderString = String.Join(',', aPreOrderStore);
    var bPreOrderString = String.Join(',', bPreOrderStore);

    if (0 == KmpSearch(bPreOrderString, aPreOrderString).Length) {
        return false;
    }*/

    var aPreOrderString = getPreOrderString(a, true);
    var bPreOrderString = getPreOrderString(b, true);

    if (0 == KmpSearch(bPreOrderString, aPreOrderString).Length) {
        return false;
    }

    return true;
}

string getPreOrderString(Tree<int> root, bool isLeft) {
    if (null == root) {
        if (isLeft) {
            return "lnull";
        } else {
            return "rnull";
        }
    }

    return "#"+root.value + " " + getPreOrderString(root.left, true)+" " + getPreOrderString(root.right, false);
}

int[] KmpSearch(string pattern, string text) {
    var result = new List<int>();
    var pLength = pattern.Length;
    var tLength = text.Length;
    var pIndex = 0;
    var tIndex = 0;
    var lps = getLps(pattern);

    while (tLength > tIndex) {
        if (pattern[pIndex] == text[tIndex]) {
            ++pIndex;
            ++tIndex;
        }

        if (pLength == pIndex) {
            result.Add(tIndex - pIndex);
            pIndex = lps[pIndex - 1];
        } else if (tLength > tIndex && pattern[pIndex] != text[tIndex]) {
            if (0 == pIndex) {
                ++tIndex;
            } else {
                pIndex = lps[pIndex - 1];
            }
        }
    }

    return result.ToArray();
}

int[] getLps(string s) {
    var n = s.Length;

    var result = new int[n];
    result[0] = 0;

    var index = 1;
    var lastPrefixLength = 0;

    while (n > index) {
        if (s[index] == s[lastPrefixLength]) {
            result[index++] = ++lastPrefixLength;
        } else {
            if (0 == lastPrefixLength) {
                result[index++] = lastPrefixLength;
            } else {
                lastPrefixLength = result[lastPrefixLength - 1];
            }
        }
    }

    return result;
}

void inOrder(Tree<int> root, List<int> store) {
    if (null == root) {
        return;
    }

    inOrder(root.left, store);
    store.Add(root.value);
    inOrder(root.right, store);
}

void preOrder(Tree<int> root, List<int> store) {
    if (null == root) {
        return;
    }

    store.Add(root.value);
    preOrder(root.left, store);
    preOrder(root.right, store);
}
