string concatenationProcess(string[] initialArray) {
    var r = new List<string>(initialArray);
    
    while (r.Count > 1) {
        int min = int.MaxValue;
        int mini = -1;
        
        for (int i = 0; i < r.Count; i++) {
            if (r.ElementAt(i).Length < min) {
                min = r.ElementAt(i).Length;
                mini = i;
            }
        }
        
        int min2 = int.MaxValue;
        int mini2 = -1;
        for (int i = r.Count - 1; i >= 0; i--) {
            if (i != mini && r.ElementAt(i).Length < min2) {
                min2 = r.ElementAt(i).Length;
                mini2 = i;
            }
        }
        
        string neu = r.ElementAt(mini) + r.ElementAt(mini2);
        
        if (mini < mini2) {
            r.RemoveAt(mini2);
            r.RemoveAt(mini);
        } else {
            r.RemoveAt(mini);
            r.RemoveAt(mini2);
        }
        
        r.Add(neu);
    }
    
    return r.First();
}
