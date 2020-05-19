
_Note: Avoid using built-in  `std::nth_element`  (or analogous built-in functions in languages other than C++) when solving this challenge. Implement them yourself, since this is what you would be asked to do during a real interview._

Find the  `kth`  largest element in an unsorted array. This will be the  `kth`  largest element in sorted order, not the  `kth`  distinct element.

Example

-   For  `nums = [7, 6, 5, 4, 3, 2, 1]`  and  `k = 2`, the output should be  
    `kthLargestElement(nums, k) = 6`;
-   For  `nums = [99, 99]`  and  `k = 1`, the output should be  
    `kthLargestElement(nums, k) = 99`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer nums**
    
    _Guaranteed constraints:_  
    `1 ≤ nums.length ≤ 10^5`,  
    `-10^5  ≤ nums[i] ≤ 10^5`.
    
-   **[input] integer k**
    
    _Guaranteed constraints:_  
    `1 ≤ k ≤ nums.length`.
    
-   **[output] integer**