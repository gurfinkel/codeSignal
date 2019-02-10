
You're standing in a long queue at the supermarket, and decide to practice your math skills by playing the following game. In your left pocket you have three coins with values  `a`,  `b`  and  `c`  respectively. You choose some of them (possibly none, but not all of them) and put them into your right pocket. Here's what you're curious about: how many different amounts of money in your left pocket can theoretically be left after this operation?

Given the values of the coins, return the number of possible amounts of money that can remain in your left pocket.

Example

-   For  `a = 1`,  `b = 1`, and  `c = 1`, the output should be  
    `calculationsWithCoins(a, b, c) = 3`.
    
    Here are all possible combinations:
    * a = b = c = 1 
    * a + b = a + c = b + c = 1 + 1 = 2 
    * a + b + c = 1 + 1 + 1 = 3 

-   For  `a = 1`,  `b = 2`, and  `c = 4`, the output should be  
    `calculationsWithCoins(a, b, c) = 7`.
    
    Here are all possible combinations:
    * a = 1 
    * b = 2 
    * a + b = 1 + 2 = 3 
    * c = 4 
    * a + c = 1 + 4 = 5 
    * b + c = 2 + 4 = 6 
    * a + b + c = 1 + 2 + 4 = 7 

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer a**
    
    _Guaranteed constraints:_  
    `1 ≤ a ≤ 10`.
    
-   **[input] integer b**
    
    _Guaranteed constraints:_  
    `1 ≤ b ≤ 10`.
    
-   **[input] integer c**
    
    _Guaranteed constraints:_  
    `1 ≤ c ≤ 10`.
    
-   **[output] integer**