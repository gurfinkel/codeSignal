
Address of a website often has the following form:  `<protocol>://<domain>.com[/<context>]`where  `<protocol>`,  `<domain>`  and  `<context>`are non-empty strings consisting of lowercase English letters.  
Note that there may be no  `<context>`  part in an address.

We need an algorithm that splits an address into an array of its parts:  `<protocol>`,  `<domain>`  and  `<context>`  (if there is one).

Example

-   For  `address = "http://codesignal.com"`, the output should be  
    `splitAddress(address) = ["http", "codesignal"]`;
-   For  `address = "http://stackoverflow.com/questions"`, the output should be  
    `splitAddress(address) = ["http", "stackoverflow", "questions"]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string address**
    
    A valid website address.
    
    _Guaranteed constraints:_  
    `15 ≤ address.length ≤ 35`.
    
-   **[output] array.string**
    
    -   Address elements  `<protocol>`,  `<domain>`and  `<context>`  placed in the given order.