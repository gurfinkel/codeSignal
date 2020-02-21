
_Note: Try to solve this task in linear time, since this is what you'll be asked to do during an interview._

Given a singly linked list consisting only of  `0`,  `1`, and  `2`, return it sorted in ascending order.

Example

-   For  `l = [2, 1, 0]`, the output should be  
    `sortZeroOneTwoList(l) = [0, 1, 2]`;
-   For  `l = [0, 1, 0, 1, 2, 0]`, the output should be  
    `sortZeroOneTwoList(l) = [0, 0, 0, 1, 1, 2]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] linkedlist.integer l**
    
    A singly linked list of integers consisting only of  `0`,  `1`, and  `2`.
    
    _Guaranteed constraints:_  
    `0 ≤ list size ≤ 105`,  
    `0 ≤ element value ≤ 2`.
    
-   **[output] linkedlist.integer**
    
    -   Return  `l`, sorted in ascending order.