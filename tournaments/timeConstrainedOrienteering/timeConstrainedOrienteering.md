
Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions. You liked participation so much that you decided to organize your very own competition, and an unusual one.

In this race the participants should find such a path from  _start_  to  _finish_  that they will spend no more than  `T`  minutes on each road. When a participant leaves a location, the time on their stopwatch is set to  `T`, and the countdown begins. If they can't make it to the next location in  `T`  seconds, they lose the race.

You have already picked a location for the  `start`, but not yet settled for the  _finish_. To decide which location to choose, for each of the  `n`  locations you'd like to calculate the minimum value of  `T`  that makes it possible to complete the race from  `start`  to this location.

Given the  `start`  location, the number of locations  `n`  and the  `roads`  connecting them, return the number of different minimum possible value of  `T`  for every  _finish_  location.

Example

For  `n = 5`,  `start = 3`, and

```
roads = [[1, 2, 3],
         [2, 3, 1],
         [2, 4, 2],
         [3, 5, 4],
         [4, 5, 3]]

```

the output should be  
`timeConstrainedOrienteering(n, start, roads) = 4`.

The minimum possible values of  `T`  for locations from  `1`  to  `n`  are  `3`,  `1`,  `0`,  `2`  and  `3`  respectively,  `4`  distinct values in total.

Here's how the locations are connected:  
![](https://codesignal.s3.amazonaws.com/tasks/timeConstrainedOrienteering/img/ex.png?_tm=1582152132528)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer n**

    The number of locations.

    _Guaranteed constraints:_  
    `2 ≤ n ≤ 10^5`.

-   **[input] integer start**

    The location you picked as a  _start_  of the race.

    _Guaranteed constraints:_  
    `1 ≤ start ≤ n`.

-   **[input] array.array.integer roads**

    A two-dimensional array representing the roads. Each road is given in the format  `[_loc1_,  _loc2_,  _t_]`, which means that it takes  `_t_`  minutes to reach  `_loc2_`  from  `_loc1_`  (both given 1-based).  
    It is guaranteed that every two locations are connected by roads.

    _Guaranteed constraints:_  
    `1 ≤ roads.length ≤ 5 · 10^4`,  
    `roads[i].length = 3`,  
    `1 ≤ roads[i][0], roads[i][1] ≤ n`,  
    `0 ≤ roads[i][2] ≤ 10^5`.

-   **[output] integer**

    The number of different possible values of  `T`  for the races that start at the  `start`  and end at the  `finish`  for every  `finish`  location from  `1`  to  `n`.
