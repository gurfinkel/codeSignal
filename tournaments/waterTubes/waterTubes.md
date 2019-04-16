
You are given some water tubes. For each  `i`where  `i`  is the tube index, it is known that the  `ith`  tube contains  `wateri`  liters of liquid, but each minute  `flowPerMinutei`  liters flows out of it. After every minute you check the tubes. How many minutes will pass until you first see that all of them are empty?

Example

-   For  `water = [1, 2, 5]`  and  `flowPerMinute = [1, 1, 2]`, the output should be  
    `waterTubes(water, flowPerMinute) = 3`;
-   For  `water = [1, 2, 3]`  and  `flowPerMinute = [1, 1, 2]`, the output should be  
    `waterTubes(water, flowPerMinute) = 2`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer water**
    
    _Guaranteed constraints:_  
    `3 ≤ water.length ≤ 10`,  
    `1 ≤ water[i] ≤ 10`.
    
-   **[input] array.integer flowPerMinute**
    
    _Guaranteed constraints:_  
    `flowPerMinute.length = water.length`,  
    `1 ≤ flowPerMinute[i] ≤ 5`.
    
-   **[output] integer**
    
    -   The first minute after which all tubes become empty.