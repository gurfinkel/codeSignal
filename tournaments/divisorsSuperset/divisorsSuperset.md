
A positive divisor of  `X`  is called  _trivial_  if it is equal to  `1`  or to  `X`. All other positive divisors are called  _non-trivial_. For example,  `1`  and  `6`  are trivial divisors of  `6`, while  `2`  and  `3`  are non-trivial divisors of  `6`  (and  `4`  and  `5`  are not divisors of  `6`).

Given an array of integers  `superset`, and an integer  `n`, your task is to find the number of integers between  `1`  and  `n`  (inclusive) whose non-trivial divisors are all contained within  `superset`.

**Example**

For  `superset = [3, 2]`  and  `n = 13`, the output should be  
`divisorsSuperset(superset, n) = 10`.

Number Non-trivial Divisors Ok?

1 				--								Ok!

2				--								Ok!

3				--								Ok!

4				2								Ok!

5				--								Ok!

6				2, 3							Ok!

7				--								Ok!

8				2,**4**					        No!

9				3								Ok!

10			    2,**5**					        No!

11			    --								Ok!

12			    2, 3,**4**,**6** 		        No!

13			    --								Ok!

There are  `10`  numbers between  `1`  and  `13`  whose divisors are all contained within  `[3, 2]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer superset**
    
    An array of positive integers.
    
    _Guaranteed constraints:_  
    `1 ≤ superset.length ≤ 5`,  
    `1 ≤ superset[i] ≤ 10`.
    
-   **[input] integer n**
    
    A positive integer.
    
    _Guaranteed constraints:_  
    `10 ≤ n ≤ 20`.
    
-   **[output] integer**
    
    -   An integer representing the number of integers between  `1`  and  `n`  (inclusive) that have all of their non-trivial divisors contained within  `superset`.