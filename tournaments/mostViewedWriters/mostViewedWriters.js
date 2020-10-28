function mostViewedWriters(topicIds, answerIds, views) {
    var topics = new Map();
    topicIds.map(x => {
        x.forEach(y => topics.set(y, {}));
    });
    
    for(var i = 0; i < views.length; i++) {
        var viewAnswerId = views[i][0];
        var viewUserId = views[i][1];
        var viewNumViews = views[i][2];
        var questionId;
        
        for(var j=0; j < answerIds.length; j++) {
            if(answerIds[j].includes(viewAnswerId))
                questionId = j;
        }
        
        var questionTags = topicIds[questionId];
        
        for(var j=0; j < questionTags.length; j++) {
            var charts = topics.get(questionTags[j]);
            if(charts[viewUserId] == undefined)
                charts[viewUserId] = [0];
            
            charts[viewUserId][0] += viewNumViews;
        }
    }
    
    var parsed = Array.from(topics);
    parsed.sort((a, b) => a[0] - b[0]);
    
    for(var i=0; i < parsed.length; i++) {
        parsed[i] = parsed[i][1];
        
        var tmp = Object.keys(parsed[i]).map(
            key => [parseInt(key), parsed[i][key][0]]
        );
        
        tmp.sort((a, b) => a[0] - b[0]);
        tmp.sort((a, b) => b[1] - a[1]);
        
        parsed[i] = tmp;
    }
    
    return parsed;
}
