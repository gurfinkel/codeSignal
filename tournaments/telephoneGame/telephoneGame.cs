int telephoneGame(string[] messages) {
    for (int i = 1; messages.Length > i; ++i) {
        if (messages[i] != messages[i - 1]) {
            return i;
        }  
    }

    return -1;
}
