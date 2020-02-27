
Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).

If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.

For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return  `-1`  instead.

Example

For  `startPosition = [1, 4, 2]`  and  `speed = [27, 18, 24]`, the output should be  
`runnersMeetings(startPosition, speed) = 3`.

In 20 seconds after the runners start running, they end up at the same point. Check out the gif below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/runnersMeetings/img/example.gif?_tm=1582087442076)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer startPosition**
    
    A non-empty array of integers representing starting positions of runners (in meters).
    
    _Guaranteed constraints:_  
    `2 ≤ startPosition.length ≤ 100`,  
    `-104  ≤ startPosition[i] ≤ 104`.
    
-   **[input] array.integer speed**
    
    Array of positive integers of the same length as  `startPosition`  representing speeds of the runners (in meters per minute).
    
    _Guaranteed constraints:_  
    `speed.length = startPosition.length`,  
    `1 ≤ speed[i] ≤ 100`.
    
-   **[output] integer**
    
    -   The maximum meeting cardinality or  `-1`  if there will be no meetings.