
Given the age of a person and the adulthood age in a particular country, determine if the person is considered an adult in that country. Note that people whose age is the same as the adulthood age are considered adult.

Example

For  `age = 18`  and  `adulthoodAge = 21`, the output should be  
`isAdult(age, adulthoodAge) = false`.

Input/Output

-   **[execution time limit] 3 seconds (java)**
    
-   **[input] integer age**
    
    The age of the person, a positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ age ≤ 25`.
    
-   **[input] integer adulthoodAge**
    
    The adulthood age, a positive integer.
    
    _Guaranteed constraints:_  
    `14 ≤ adulthoodAge ≤ 25`.
    
-   **[output] boolean**
    
    -   `true`  if the person is adult,  `false`  otherwise.