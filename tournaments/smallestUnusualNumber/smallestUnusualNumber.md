
Let's call an integer  _unusual_  if the sum of its digits is larger than the product of its digits. For example, the numbers  `21`  and  `990`  are  _unusual_, while the numbers  `22`  and  `991`  aren't.

Given an integer  `a`  (represented as a string), find the smallest  _unusual_  integer  `x`  such that  `x ≥ a`. Since both  `x`  and  `a`  can be very large, return the value of  `x - a`.

Example

For  `a = "42"`, the output should be  
`smallestUnusualNumber(a) = 8`.

The smallest  _unusual_  number that is greater than or equal to  `42`  is  `50`, and  `50 - 42 = 8`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string a**
    
    A string representing a positive integer without leading zeros.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 105`.
    
-   **[output] integer**
    
    -   The difference between the smallest  _unusual_number that is larger than or equal to  `a`, and  `a`.