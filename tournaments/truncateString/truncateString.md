
Consider the following operation on a string containing digits from  `1`  to  `9`:

-   if the leftmost digit of the string is divisible by  `3`, remove it from the string;
-   otherwise, if the rightmost digit of the string is divisible by  `3`, remove it from the string;
-   otherwise, if the sum of two digits on the sides of the string is divisible by  `3`, remove  _both digits_  from the string;

This operation is applied sequentially until the string is empty or neither of the three given conditions is met.

For a given string find the result of applying the given algorithm to it.

Example

For  `s = "312248"`, the output should be  
`truncateString(s) = "2"`.

Here's how the answer is obtained:

1.  `3`  is divisible by  `3`  and should be removed (`"12248"`);
2.  neither  `1`  nor  `8`  is divisible by  `3`, but their sum is, so both digits should be removed (`"224"`);
3.  neither  `2`  nor  `4`  is divisible by  `3`, but their sum is, so both digits should be removed (`"2"`);
4.  the resulting string  `"2"`  doesn't meet any condition, so it is the final answer.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string s**
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 15`.
    
-   **[output] string**