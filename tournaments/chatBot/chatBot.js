function chatBot(conversations, currentConversation) {
    var dict = {}
    for (word of currentConversation)
        dict[word] = 1
    var max = 0, y = 0, x = 0;
    for (var i in conversations) {
        var words = conversations[i], cnt = 0, set = new Set();
        for (var j in words) {
            if (words[j] in dict) {
                cnt += !set.has(words[j]);
                if (cnt > max || y == i) {
                    max = cnt;
                    y = +i;
                    x = +j;
                }
                set.add(words[j]);
            }
        }
    }
    return currentConversation.concat(max > 0 ? conversations[y].slice(x + 1) : [])
}
