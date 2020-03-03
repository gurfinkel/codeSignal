
_Note: Write a solution with  `O(operations.length)`  complexity, since this is what you would be asked to do during a real interview._

Implement a modified stack that, in addition to using  `push`  and  `pop`  operations, allows you to find the current minimum element in the stack by using a  `min`  operation.

Example

For  `operations = ["push 10", "min", "push 5", "min", "push 8", "min", "pop", "min", "pop", "min"]`, the output should be  
`minimumOnStack(operations) = [10, 5, 5, 5, 10]`.

The  `operations`  array contains  `5`  instances of the  `min`  operation. The results array contains  `5`  numbers, each representing the minimum element in the stack at the moment when  `min`  was called.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.string operations**
    
    An array of operations consistently applied to the stack. For each valid  `i`,  `operations[i]`  is one of the following operations:
    
    -   `push x`: add the number  `x`  to the stack;
    -   `pop`: remove an element from the top of the stack;
    -   `min`: find the minimum element from the current stack elements.  
        It is guaranteed that  `pop`  and  `min`  are not applied to an empty stack. It is also guaranteed that all of the numbers in the stack are positive and not greater than  `109`.
    
    _Guaranteed constraints:_  
    `1 ≤ operations.length ≤ 104`.
    
-   **[output] array.integer**
    
    -   For each  `min`  operation, return the minimum element from the current stack elements at the moment when the operation was called.