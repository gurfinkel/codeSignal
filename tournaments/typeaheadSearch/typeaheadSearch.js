function typeaheadSearch(queries) {
    var db       = [], // database
        response = [], // response array
        matches  = [], // query matches
        re,            // query tokens
        i, j,          // loop indexes
        a, b,          // idexes at pattern search
        ord      = 0;  // timeline indexes. larger value the newer.
    for (i in queries)
        if (queries[i][0] == "ADD") {
            // tokenize the data string and order by alphabetically
            tokens = new Set(queries[i][4].toLowerCase().trim().split(/\s+/).sort());
            // store it in the db
            db.push({
                ord: ord++,
                id: queries[i][2],
                type: queries[i][1],
                score: queries[i][3],
                data: queries[i][5],
                tokens: [...tokens]
            });
        } else if (queries[i][0] == "DEL") {
            db.splice(db.findIndex(r => r.id == queries[i][1]), 1);
        } else if (queries[i][0] == "QUERY") {
            // tokenize the query string and order by alphabetically
            re = [...new Set(queries[i][2].toLowerCase().trim().split(/\s+/).sort())];
            var match = [];
            for (j in db) {
                a = b = 0;
                // search each tokens.
                while (a < re.length && b < db[j].tokens.length) {
                    if (re[a] == db[j].tokens[b].slice(0, re[a].length)) {
                        a++;
                        b++;
                    } else if (re[a] < db[j].tokens[b]) {
                        break;
                    } else {
                        b++;
                    }
                }
                if (a == re.length)
                    match.push(db[j]);
            }
            // sort the response and cut to requested length
            response.push(
                match.sort((a, b) => parseFloat(b.score) - parseFloat(a.score) || b.ord - a.ord)
                    .slice(0, queries[i][1])
                    .map(v => v.id)
            )
        }
    return response;
}
