function ontology(treeRepr, questions, queries) {
    var tree     = {},
        parents  = [],
        level    = 0,
        response = [],
        i;
    // build tree
    treeRepr.split(" ")
        .map(word => {
            if (word == '(') {
                level++
            } else if (word == ')') {
                level--
            } else {
                tree[word] = [word]
                parents[level] = word
                for (i = 0; i < level; i++) {
                    tree[parents[i]].push(word);
                }
            }
        });
    
    // reformat questions, split to title and question
    for (i in questions)
        questions[i] = questions[i].split(": ");
    
    // process queries
    for (i in queries) {
        // split to title and question prefix
        var firstSpace = queries[i].indexOf(" "),
            section    = queries[i].slice(0, firstSpace),
            question   = queries[i].slice(firstSpace + 1),
            match = 0;
        if (tree[section])
            for (var j in questions)
                if (tree[section].includes(questions[j][0])) {
                    if (question == questions[j][1].slice(0, question.length)) {
                        match++;
                    }
                }
        
        response[i] = match;
    }
    return response;
}
