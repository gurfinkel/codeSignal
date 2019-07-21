
You are working with a machine that resembles a queue. It supports two operations:  _add an element to the back of the queue_  and  _remove an element from the front of the queue_. The machine recognizes the following commands:

-   `"+N"`  (`N ≥ 0`) - add  `N`  to the back of the queue;
-   `"-"`  - remove an element from the front of the queue.

Given an array of commands, return an array of sums of all elements in the queue after each operation the machine performs.

It is guaranteed that the second type operation is never applied to an empty queue. Sum of an empty queue is equal to  `0`.  
It is guaranteed that each command is recognizable by the machine.  
It is also guaranteed that the queue will not have more than  `10`  elements in it at any moment.

Example

For  `commands = ["+1", "+2", "-", "+3"]`, the output should be  
`cyclicQueue(commands) = [1, 3, 2, 5]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.string commands**
    
    _Guaranteed constraints:_  
    `3 ≤ commands.length ≤ 35`.
    
-   **[output] array.integer**