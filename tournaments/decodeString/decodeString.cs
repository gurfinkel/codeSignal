string decodeString(string s) {
    String res = string.Empty;
    Stack<string> resStack = new Stack<string>();
    Stack<int> countStack = new Stack<int>();
    int currIndex = 0;
    while (currIndex < s.Length)
    {
        if (char.IsDigit(s[currIndex]))
        {
            int count = s[currIndex] - '0';
            currIndex++;
            while (char.IsDigit(s[currIndex]))
            {
                count = 10 * count + (s[currIndex] - '0');
                currIndex++;
            }
            countStack.Push(count);
        }
        else if (s[currIndex] == '[')
        {
            resStack.Push(res);
            res = string.Empty;
            currIndex++;
        }
        else if (s[currIndex] == ']')
        {
            StringBuilder repeatString = new StringBuilder();
            int repeatTimes = countStack.Pop();
            for (int i = 0; i < repeatTimes; i++)
                repeatString.Append(res);
            res = resStack.Pop() + repeatString.ToString();
            currIndex++;
        }
        else
        {
            res += s[currIndex++];
        }
    }
    return res;
}
