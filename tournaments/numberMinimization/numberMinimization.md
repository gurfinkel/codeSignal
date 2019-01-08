
You are given a positive integer  `n`. You can perform the following operations one at a time:

-   Divide the current value by  `d`  (which is also given). This operation is allowed only if the current value if divisible by  `d`;
-   Reorder the digits in the current value. If the number contains one or more leading zeros after this operation, they should be dropped.

What is the smallest number that you can obtain after performing an arbitrary number of these operations?

Example

-   For  `n = 501`  and  `d = 3`, the output should be  
    `numberMinimization(n, d) = 5`.
    
    -   First, let's turn  `501`  into  `051`  by reordering the digits. Since we drop the leading zero, we get  `51`.
    -   Now let's reorder the digits in  `51`. There is only one way to obtain a different value by reordering digits, which is to swap  `5`  and  `1`, giving us  `15`as a result.
    -   `15`  is divisible by  `3`. Applying the first operation, we get  `5`, which is the answer.
    -   Note that both operations were possible on all the steps because  `501`  and  `51`  are also divisible by  `3`. However, only the listed sequence of operations leads to the smallest possible result.
-   For  `n = 4006`  and  `d = 2`, the output should be  
    `numberMinimization(n, d) = 1`.
    
    -   By applying the second operation (reordering) to the digits of  `n`, we can get  `64`  (`0064`  with the leading zeros dropped).
    -   `64 = 26`, which means that we can repeatedly divide it by  `d = 2`  until we get  `1`.
-   For  `n = 321`  and  `d = 5`, the output should be  
    `numberMinimization(n, d) = 123`.
    
    -   Initially, only the second operation is possible because  `321`  is not divisible by  `5`.
    -   By applying that operation, one can get  `123`,  `132`,  `213`,  `231`,  `312`  and  `321`. None of these integers is divisible by  `d`.
    -   Therefore, the smallest integer that we can get is  `123`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 105`.
    
-   **[input] integer d**
    
    _Guaranteed constraints:_  
    `1 ≤ d ≤ 105`.
    
-   **[output] integer**
    
    -   The smallest possible number that can be obtained by starting from  `n`  and performing an arbitrary number of the operations described above.