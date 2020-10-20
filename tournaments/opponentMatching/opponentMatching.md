
When you click the  `VS Fight`  button on CodeSignal, the system tries to match you with the best opponent possible. The matching algorithm has become more complex over time,but initially it was a simple search for someone whose  `xp`  is as close to yours as possible.

The easiest way to understand how it used to conduct the search is as follows:

![](https://codesignal.s3.amazonaws.com/tasks/opponentMatching/img/example.jpg?_tm=1582075577669)

-   Imagine that each user looking for an opponent is standing at the center of a search circle on a horizontal  `xp`  axis.
-   All the search circles have the same radius (the search radius), and initially search radius is equal to  `0`.
-   At each step, the search radius is increased by  `1`.
-   A match is found as soon as two search circles intersect. These circles are then removed immediately.
-   For the sake of simplicity, assume that on each step no more than one pair of circles can intersect.

Given a list of requests as user  `xp`s, match them up using the algorithm described above.

Example

For  `xp = [200, 100, 70, 130, 100, 800, 810]`, the output should be  
`opponentMatching(xp) = [[1, 4], [5, 6], [2, 3]]`.

-   Initially, search ranges for users  `1`  and  `4`  (these are their IDs equal to  `0`-based indices) coincide, so they form the first pair.
-   After  `5`  steps search circles of users  `5`  and  `6`  intersect. Thus, they form the second pair.
-   After  `25`  more steps search circles of users  `2`  and  `3`  intersect. Thus, they form the third pair.
-   Finally, user  `0`  remains without an opponent.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer xp**
    
    Array of positive integers.  
    `xp[i]`  equals XP points earned by the user with  `ID = i`.
    
    _Guaranteed constraints:_  
    `1 ≤ xp.length ≤ 15`,  
    `1 ≤ xp[i] ≤ 10^9`.
    
-   **[output] array.array.integer**
    
    Array of pairs of opponents. Pairs should be stored in the same order as they were formed by the above-described algorithm. Elements in pairs should be sorted according to their IDs.
