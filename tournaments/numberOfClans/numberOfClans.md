
Let's call two integers  `A`  and  `B`  _friends_  if each integer from the array  `divisors`  is either a divisor of both  `A`  and  `B`  or neither  `A`  nor  `B`. If two integers are  _friends_, they are said to be in the same  _clan_. How many clans are the integers from  `1`  to  `k`, inclusive, broken into?

Example

For  `divisors = [2, 3]`  and  `k = 6`, the output should be  
`numberOfClans(divisors, k) = 4`.

The numbers  `1`  and  `5`  are friends and form a  _clan_,  `2`  and  `4`  are friends and form a  _clan_, and  `3`  and  `6`  do not have friends and each is a  _clan_  by itself. So the numbers  `1`  through  `6`  are broken into  `4`  clans.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer divisors**
    
    A non-empty array of positive integers.
    
    _Guaranteed constraints:_  
    `2 ≤ divisors.length < 10`,  
    `1 ≤ divisors[i] ≤ 10`.
    
-   **[input] integer k**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `5 ≤ k ≤ 10`.
    
-   **[output] integer**