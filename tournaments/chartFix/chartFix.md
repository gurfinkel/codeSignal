
As an economist, you are interested in Pingland PING to Pongland PONG currency chart. In a conference that will take place really soon, you want to show everyone that PING/PONG rate has been increasing lately. In order to do this you decided to remove from the chart some points so that the remaining points form a strictly increasing sequence. Find the smallest number of points you have to remove.

Example

For  `chart = [3, 2, 6, 4, 5, 1, 7]`, the output should be  
`chartFix(chart) = 3`.

After you remove points  `2`,  `6`, and  `1`  the remaining points will form a sequence  `[3, 4, 5, 7]`, which is strictly increasing. Check out the image below for better understanding:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/chartFix/img/example.png?_tm=1530791290637)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer chart**
    
    PING/PONG rates on the chart. In accordance with the current trade agreements, PING/PONG rate is always an integer value.
    
    _Guaranteed constraints:_  
    `3 ≤ chart.length ≤ 300`,  
    `0 ≤ chart[i] ≤ 20`.
    
-   **[output] integer**
    
    -   The number of points to be removed.