int[] arrayPreviousLess(int[] items) {
    var n = items.Length;
    var store = new Stack<int>();

    for (int i = 0; n > i; ++i) {
        var temp = items[i];
        while (0 < store.Count) {
            if (store.Peek() < items[i]) {
                items[i] = store.Peek();
                break;
            } else {
                store.Pop();
            }
        }

        if (0 == store.Count) {
            items[i] = -1;
        }

        store.Push(temp);
    }

    return items;
}
