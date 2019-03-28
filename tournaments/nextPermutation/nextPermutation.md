
For a given permutation find the next permutation after the given one in  lexicographical order.

Example

-   For  `permutation = [1, 3, 2, 4]`, the output should be  
    `nextPermutation(permutation) = [1, 3, 4, 2]`;
-   For  `permutation = [4, 3, 2, 1]`, the output should be  
    `nextPermutation(permutation) = [1, 2, 3, 4]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer permutation**
    
    Array of integers representing a permutation.
    
    _Guaranteed constraints:_  
    `2 ≤ permutation.length ≤ 15`.
    
-   **[output] array.integer**
    
    -   Array representing the next permutation after the given  `permutation`  in  _lexicographical order_. In case there is no such permutation return the lexicographically smallest permutation.