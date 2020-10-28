function feedOptimizer(span, h, events) {
    var stories = [],
        ret = [],
        i, j, k,
        event, sets,
        time, score, height,
        tmp,
        Old, New,
        max, list;
    for (i in events) {
        if (events[i].length == 3) {
            stories.push(events[i]);
        } else {
            event = +events[i];
            sets = {0: {score:0, list: ""}};
            for (i in stories) {
                [time, score, height] = stories[i];
                if (time + span < event) continue;
                tmp = {};
                for (j in sets)
                    tmp[j] = sets[j];
                
                for (j in sets) {
                    k = j - - height;
                    if (k <= h) {
                        Old = tmp[k];
                        New = {score: sets[j].score + score, list: sets[j].list+","+(i - - 100)};
                        if (!Old) {
                            tmp[k] = New;
                        } else if (Old.score < New.score) {
                            tmp[k] = New;
                        } else if (Old.score == New.score && Old.list.length > New.list.length) {
                            tmp[k] = New;
                        } else if (Old.score == New.score && Old.list.length == New.list.length &&
                            Old.list > New.list) {
                            tmp[k] = New;
                        }
                    }
                }
                sets = tmp;
                //console.log(sets);
            }
            //console.log(sets);
            max = 0;
            list = ",";
            for (i in sets) {
                i = sets[i];
                if (i.score > max) {
                    max = i.score;
                    list = i.list;
                } else if (max == i.score) {
                    if (list.length > i.list.length) {
                        list = i.list;
                    } else if (list.length == i.list.length) {
                        if (list > i.list) {
                            list = i.list;
                        }
                    }
                }
            }
            ret.push([max, ...list.split(",").map(a => a - 99).slice(1)]);
        }
    }
    return ret;
}
