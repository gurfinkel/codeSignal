
Given an array of integers, determine whether there are two distinct indices  `i`  and  `j`  in the array such that:

-   The absolute difference between  `i`  and  `j`  is at most  `k`
-   The absolute difference between  `nums[i]`  and  `nums[j]`  is at most  `t`

Example

-   For  `nums = [1, 3, 1]`,  `k = 2`, and  `t = 1`, the output should be  
    `containsNearbyAlmostDuplicate(nums, k, t) = true`.
    
    The absolute difference between indices  `0`  and  `2`  is  `2`  (the value of  `k`) and the absolute difference between elements  `1`  and  `1`  is  `0`  (less than the value of  `t`), so this array meets all of the requirements and the output is  `true`.
    
-   For  `nums = [-3, 3]`,  `k = 2`, and  `t = 4`, the output should be  
    `containsNearbyAlmostDuplicate(nums, k, t) = false`.
    
    The absolute difference between  `-3`  and  `3`  is  `6`, which is more than the value of  `t`, meaning that the output is  `false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer nums**
    
    _Guaranteed constraints:_  
    `2 ≤ nums.length ≤ 2 · 105`,  
    `-231≤ nums[i] ≤ 231  - 1`.
    
-   **[input] integer k**
    
    An integer that represents the highest allowable absolute difference between  `i`  and  `j`.
    
    _Guaranteed constraints:_  
    `1 ≤ k ≤ 104`.
    
-   **[input] integer t**
    
    An integer that represents the highest allowable absolute difference between  `nums[i]`  and  `nums[j]`.
    
    _Guaranteed constraints:_  
    `0 ≤ t ≤ 231  - 1`.
    
-   **[output] boolean**
    
    -   Return  `true`  if the input array meets the requirements as stated above, otherwise return  `false`.
