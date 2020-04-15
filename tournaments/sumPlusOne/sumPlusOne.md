
Given the sum of the digits of  `n`, return all possible values of the sum of the digits of  `n+1`. Your resulting array should be  _sorted_.

For example, if the sum of the digits of  `n`  is 11, then the output should be  `[3, 12]`:

-   if  `n = 56`  then  `n+1 = 57`  which has a digit sum of  `12`,
-   if  `n = 119`  then  `n+1 = 120`  which has a digit sum of  `3`,
-   and we can verify that there are no other possible values.

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer sn**
    
    The sum of the digits of  `n`, a positive integer. Note that while  `sn`  is an integer,  `n`  itself may not be of type  `int`  in your language.
    
-   **[output] array.integer**
    
    -   The  _sorted_  array containing all possible values of the sum of the digits of  `n+1`.