string[] isDivisibleBy3(string inputString) {
    int s=0;
    for (int i=0; i<inputString.Length; i++)
        if (inputString[i]!='*')
            s+=inputString[i]-'0';
    List<int> sub = new List<int>();
    if (s%3==0){sub.Add(0); sub.Add(3); sub.Add(6); sub.Add(9); }
    if (s%3==1){sub.Add(2); sub.Add(5); sub.Add(8); }
    if (s%3==2){sub.Add(1); sub.Add(4); sub.Add(7); }
    List<string> r = new List<string>();
    foreach (int i in sub)
        r.Add(inputString.Replace('*', (char)(i+'0')));
    return r.ToArray();
}