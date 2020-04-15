
_Note: Your solution should have  `O(n)`  time complexity, where  `n`  is the number of elements in  `l`, since this is what you will be asked to accomplish in an interview._

You have a singly linked list  _`l`_, which is sorted in strictly increasing order, and an integer  `value`. Add  `value`  to the list  _`l`_, preserving its original sorting.

_Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node  `l`  of the linked list_

Example

-   For  `l = [1, 3, 4, 6]`  and  `value = 5`, the output should be  
    `insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 5, 6]`;
-   For  `l = [1, 3, 4, 6]`  and  `value = 10`, the output should be  
    `insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 6, 10]`;
-   For  `l = [1, 3, 4, 6]`  and  `value = 0`, the output should be  
    `insertValueIntoSortedLinkedList(l, value) = [0, 1, 3, 4, 6]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] linkedlist.integer l**
    
    A singly linked list of integers sorted in strictly increasing order. Thus, all integers in the list are pairwise distinct.
    
    _Guaranteed constraints:_  
    `0 ≤ list size ≤ 104`,  
    `-109  ≤ element value ≤ 109`.
    
-   **[input] integer value**
    
    A single integer value to be inserted into  `l`. It is guaranteed that there is not an element equal to  `value`  in  `l`  before the insertion is performed.
    
    _Guaranteed constraints:_  
    `-109  ≤ value ≤ 109`.
    
-   **[output] linkedlist.integer**
    
    -   Return  `l`  after inserting  `value`  into it, with the original sorting preserved.