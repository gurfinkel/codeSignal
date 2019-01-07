
Given array of integers, find the number of sorted pairs formed by its (different) elements such that the second element in the pair is divisible by the first one.

Example

-   For  `sequence = [1, 3, 2]`, the output should be  
    `divisorsPairs(sequence) = 2`.
    
    These pairs are:  `(1, 3), (1, 2)`.
    
-   For  `sequence = [2, 4, 8]`, the output should be  
    `divisorsPairs(sequence) = 3`.
    
    These pairs are:  `(2, 4), (2, 8), (4, 8)`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer sequence**
    
    Unsorted array of different positive integers.
    
    _Guaranteed constraints:_  
    `1 ≤ sequence.length ≤ 10`,  
    `1 ≤ sequence[i] ≤ 50`.
    
-   **[output] integer**