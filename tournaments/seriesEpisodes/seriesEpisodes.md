
Your favorite TV series consists of several episodes, each of which runs for some  `duration`  of minutes. You want to rewatch the series, so you're going to watch some episodes again over the next few days.

This is your plan: On day  `i`, you're going to watch some of the episodes with indices from  `l[i]`  to  `r[i]`  (both inclusive) and you have exactly  `freeTime[i]`  minutes to do so. You don't want to watch the same episode twice on one day, you want to watch each of the episodes that you start watching up until its end on the same day, and you want to spend all the free time that you have available watching the series. On how many days is it possible to meet all these requirements?

Example

For  `duration = [30, 35, 32, 30]`,  `l = [0, 0, 1, 0, 3, 2]`,  `r = [2, 0, 3, 3, 3, 2]`, and  `freeTime = [62, 30, 60, 60, 32, 29]`, the output should be  
`seriesEpisodes(duration, l, r, freeTime) = 3`.

-   On day  `0`, you can watch episodes  `0`  and  `2`  (totaling  `30 + 32 = 62`  minutes).
-   On day  `1`, you can watch episode  `0`  (`30`  minutes long).
-   On day  `2`, it is impossible to choose a subset of episodes  `1`,  `2`, and  `3`  (which have durations of  `35`,  `32`, and  `30`  minutes, respectively) such that the total duration equals  `60`.
-   On day  `3`, you can watch episodes  `0`  and  `3`  (totaling  `30 + 30 = 60`  minutes).
-   On day  `4`, you want to watch episode  `3`, but it is not long enough to fill all your available free time.
-   On day  `5`, you want to watch episode  `2`, but it lasts longer than the free time you have.

Given the parameters of your plan, you're able to watch episodes of your show on  `3`  of the days on which you have free time.

Input/Output

-   **[execution time limit] 8 seconds (py3)**
    
-   **[input] array.integer duration**
    
    _Guaranteed constraints:_  
    `1 ≤ duration.length ≤ 1000`,  
    `1 ≤ duration[i] ≤ 1000`.
    
-   **[input] array.integer l**
    
    _Guaranteed constraints:_  
    `0 ≤ l.length = r.length = freeTime.length ≤ 104`,  
    `0 < l[i] ≤ r[i] < duration.length`.
    
-   **[input] array.integer r**
    
    _Guaranteed constraints:_  
    `0 ≤ l.length = r.length = freeTime.length ≤ 10^4`,  
    `0 < l[i] ≤ r[i] < duration.length`.
    
-   **[input] array.integer freeTime**
    
    _Guaranteed constraints:_  
    `0 < l.length = r.length = freeTime.length ≤ 10^4`,  
    `0 < freeTime[i] ≤ 1000`.
    
-   **[output] integer**
    
    -   The number of days on which you can choose some subset of episodes from  `l[i]`  to  `r[i]`, such that their total duration is exactly  `freeTime[i]`  minutes.