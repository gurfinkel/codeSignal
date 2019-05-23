
Let's say that number  `a`  feels  _comfortable_with number  `b`  if  `a ≠ b`  and  `b`  lies in the segment  `[a - s(a), a + s(a)]`, where  `s(x)`is the sum of  `x`'s digits.

How many pairs  `(a, b)`  are there, such that  `a < b`, both  `a`  and  `b`  lie on the segment  `[l, r]`, and each number feels  _comfortable_  with the other (so  `a`  feels  _comfortable_  with  `b`  and  `b`  feels  _comfortable_  with  `a`)?

Example

For  `l = 10`  and  `r = 12`, the output should be  
`comfortableNumbers(l, r) = 2`.

Here are all values of  `s(x)`  to consider:

-   `s(10) = 1`, so  `10`  is  _comfortable_  with  `9`and  `11`;
-   `s(11) = 2`, so  `11`  is  _comfortable_  with  `9`,  `10`,  `12`  and  `13`;
-   `s(12) = 3`, so  `12`  is  _comfortable_  with  `9`,  `10`,  `11`,  `13`,  `14`  and  `15`.

Thus, there are  `2`  pairs of numbers  _comfortable_  with each other within the segment  `[10; 12]`:  `(10, 11)`  and  `(11, 12)`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r ≤ 1000`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ r ≤ 1000`.
    
-   **[output] integer**
    
    -   The number of pairs satisfying all the above conditions.