
We need a function that calculates the number of Sundays after a specific day for a given period.

**Example**

-   For  `n = 9`  and  `startDay = "Saturday"`, the output should be  
    `howManySundays(n, startDay) = 2`;
-   For  `n = 7`  and  `startDay = "Sunday"`, the output should be  
    `howManySundays(n, startDay) = 1`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `3 ≤ n ≤ 500`.
    
-   **[input] string startDay**
    
    A string representing some day of the week.  
    _Guaranteed constraints:_  
    `startDay ∈ ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]`.
    
-   **[output] integer**
    
    -   Number of Sundays during the  _next_  `n`days given that  `startDay`  is the day of the week today.