bool isLucky(int n) {
    var store = new Stack<int>();
    var temp = 1;
    
    while (temp <= n) {
        var digit = (n % (temp * 10)) / temp;
        store.Push(digit);
        Console.WriteLine(digit);
        temp *= 10;
    }
    
    var result = 0;
    var count = store.Count;
    
    for (int i = 0; count > i; ++i) {
        if (count / 2 > i) {
            result += store.Pop();
        } else {
            result -= store.Pop();
        }
    }
    
    return 0 == result;
}
