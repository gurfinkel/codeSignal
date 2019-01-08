function differentSubstringsTrie(inputString) {

    var addNode = function(lastVersion) {
        var line = [];
        for (var i = 0; i < 26; i++) {
            line.push(0);
        }
        lastVersion.push(line);
    };
  
    var nodesCount = 1;
    var trie = [];
    addNode(trie);
  
    for (var i = 0; i < inputString.length; i++) {
        var currentNode = 0;
        for (var j = i; j < inputString.length; j++) {
            var symbol = inputString.charCodeAt(j) - 'a'.charCodeAt(0);
            if (!trie[currentNode][symbol]) {
                addNode(trie);
                trie[currentNode][symbol] = nodesCount;
                nodesCount++;
            }
            currentNode = trie[currentNode][symbol];
        }
    }
  
    return nodesCount - 1;
}
    