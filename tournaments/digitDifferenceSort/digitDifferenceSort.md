
Given an array of integers, sort its elements by the  _difference_  of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.

Example

For  `a = [152, 23, 7, 887, 243]`, the output should be  
`digitDifferenceSort(a) = [7, 887, 23, 243, 152]`.

Here are the  _differences_  of all the numbers:

-   `152`:  `difference = 5 - 1 = 4`;
-   `23`:  `difference = 3 - 2 = 1`;
-   `7`:  `difference = 7 - 7 = 0`;
-   `887`:  `difference = 8 - 7 = 1`;
-   `243`:  `difference = 4 - 2 = 2`.

`23`  and  `887`  have the same  _difference_, but  `887`  goes after  `23`  in  `a`, so in the sorted array it comes first.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer a**
    
    An array of integers.
    
    _Guaranteed constraints:_  
    `0 ≤ sequence.length ≤ 104`,  
    `1 ≤ sequence[i] ≤ 105`.
    
-   **[output] array.integer**
    
    -   Array  `a`  sorted as described above.