
Given a sorted integer array in which the range of elements is in the inclusive range [l, r], return its missing inner ranges.

Example

For  `nums = [-5, 10, 12, 13, 50]`,  `l = -5`, and  `r = 88`, the output should be  
`innerRanges(nums, l, r) = ["-4->9", "11", "14->49", "51->88"]`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer nums**
    
    _Guaranteed constraints:_  
    `0 ≤ nums.length ≤ 10`,  
    `-2^31  - 1 ≤ nums[i] ≤ 2^31  - 1`.
    
-   **[input] integer l**
    
    _Guaranteed constraints:_  
    `-2^31  - 1 ≤ l ≤ r ≤ 2^31  - 1`.
    
-   **[input] integer r**
    
    _Guaranteed constraints:_  
    `-2^31  - 1 ≤ l ≤ r ≤ 2^31  - 1`.
    
-   **[output] array.string**
