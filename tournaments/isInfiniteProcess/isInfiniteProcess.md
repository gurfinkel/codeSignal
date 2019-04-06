
Given integers  `a`  and  `b`, determine whether the following pseudocode results in an infinite loop

    while a is not equal to b do 
	    increase a by 1 
	    decrease b by 1 

Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example

-   For  `a = 2`  and  `b = 6`, the output should be  
    `isInfiniteProcess(a, b) = false`;
-   For  `a = 2`  and  `b = 3`, the output should be  
    `isInfiniteProcess(a, b) = true`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer a**
    
    _Guaranteed constraints:_  
    `0 ≤ a ≤ 20`.
    
-   **[input] integer b**
    
    _Guaranteed constraints:_  
    `0 ≤ b ≤ 20`.
    
-   **[output] boolean**
    
    -   `true`  if the pseudocode will never stop,  `false`  otherwise.