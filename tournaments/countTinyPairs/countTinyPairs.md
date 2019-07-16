
You are given two arrays of integers  `a`  and  `b`  of the same length, and an integer  `k`. We will be iterating through array  `a`  from left to right, and simultaneously through array  `b`from right to left, and looking at pairs  `(x, y)`, where  `x`  is from  `a`  and  `y`  is from  `b`. Such a pair is called  _tiny_  if the concatenation  `xy`  is strictly less than  `k`.

Your task is to return the number of  _tiny_  pairs that you'll encounter during the simultaneous iteration through  `a`  and  `b`.

Example

-   For  `a = [1, 2, 3]`,  `b = [1, 2, 3]`, and  `k = 31`, the output should be  
    `countTinyPairs(a, b, k) = 2`.
    
    We're considering the following pairs during iteration:
    
    -   `(1, 3)`. Their concatenation equals  `13`, which is less than  `31`, so the pair is  _tiny_;
    -   `(2, 2)`. Their concatenation equals  `22`, which is less than  `31`, so the pair is  _tiny_;
    -   `(3, 1)`. Their concatenation equals  `31`, which is not less than  `31`, so the pair is not  _tiny_.
    
    As you can see, there are  `2`  _tiny_  pairs during the iteration, so the answer is  `2`.
    
-   For  `a = [16, 1, 4, 2, 14]`,  `b = [7, 11, 2, 0, 15]`, and  `k = 743`, the output should be  
    `countTinyPairs(a, b, k) = 4`.
    
    We're considering the following pairs during iteration:
    
    -   `(16, 15)`. Their concatenation equals  `1615`, which is greater than  `743`, so the pair is not  _tiny_;
    -   `(1, 0)`. Their concatenation equals  `10`, which is less than  `743`, so the pair is  _tiny_;
    -   `(4, 2)`. Their concatenation equals  `42`, which is less than  `743`, so the pair is  _tiny_.
    -   `(2, 11)`. Their concatenation equals  `211`, which is less than  `743`, so the pair is  _tiny_;
    -   `(14, 7)`. Their concatenation equals  `147`, which is less than  `743`, so the pair is  _tiny_.
    
    There are  `4`  _tiny_  pairs during the iteration, so the answer is  `4`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer a**
    
    An array of non-negative integers.
    
    _Guaranteed constraints:_  
    `0 ≤ a.length ≤ 105`,  
    `0 ≤ a[i] ≤ 104`.
    
-   **[input] array.integer b**
    
    An array of non-negative integers.
    
    _Guaranteed constraints:_  
    `b.length = a.length`,  
    `0 ≤ b[i] ≤ 104`.
    
-   **[input] integer k**
    
    An integer to compare concatenated pairs with.
    
    _Guaranteed constraints:_  
    `0 ≤ k ≤ 109`.
    
-   **[output] integer**
    
    -   The number of  _tiny_  pairs during the iteration.