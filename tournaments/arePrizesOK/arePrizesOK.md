
A programming competition is going to be held in your town and the organizers have given you the prizes they are planning to give to the first, second, and third places. Of course the prize for the first place must not be smaller than that for the second place, and the prize for the second place must not be smaller than that for the third place. Your task is to make sure the prizes do not violate the principles mentioned above.

Example

For  `first = 10`,  `second = 5`, and  `third = 5`, the output should be  
`arePrizesOK(first, second, third) = true`.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer first**
    
    The prize intended for the first place, a non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ first ≤ 10`.
    
-   **[input] integer second**
    
    The prize intended for the second place, a non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ second ≤ 10`.
    
-   **[input] integer third**
    
    The prize intended for the third place, a non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ third ≤ 10`.
    
-   **[output] boolean**
    
    -   `true`  if the prizes are correct,  `false`  otherwise.