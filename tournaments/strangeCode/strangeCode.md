
You have found a machine which, when fed with two numbers  `s`  and  `e`, produces a strange code consisting of the letters  `a`  and  `b`. The machine seems to be using the following algorithm.

1.  Check if  `s`  is less than  `e - 1`. If so, continue to step  `2`. If not, exit.
2.  Increment  `s`  by  `1`
3.  Decrement  `e`  by  `1`
4.  If this is the first letter you're producing, produce  `a`. Otherwise produce a letter different from the one you last produced (only  `a`  and  `b`  may be produced)
5.  go to step  `1`.

You are to write a function that simulates the workings of the machine.

Example

For  `s = 4`  and  `e = 8`, the output should be  
`strangeCode(s, e) = "ab"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer s**
    
    _Guaranteed constraints:_  
    `4 ≤ s ≤ 20`.
    
-   **[input] integer e**
    
    _Guaranteed constraints:_  
    `4 ≤ e ≤ 20`.
    
-   **[output] string**
    
    -   A string of the letters the machine produced.