
_Note: Try to solve this task in  `O(n)`  time using  `O(1)`  additional space, where  `n`  is the number of elements in  `l`, since this is what you'll be asked to do during an interview._

Given a singly linked list of integers, determine whether or not it's a  palindrome.

_Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node  `l`  of the linked list_

Example

-   For  `l = [0, 1, 0]`, the output should be  
    `isListPalindrome(l) = true`;
    
-   For  `l = [1, 2, 2, 3]`, the output should be  
    `isListPalindrome(l) = false`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] linkedlist.integer l**
    
    A singly linked list of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ list size ≤ 5 · 105`,  
    `-109  ≤ element value ≤ 109`.
    
-   **[output] boolean**
    
    -   Return  `true`  if  `l`  is a palindrome, otherwise return  `false`.