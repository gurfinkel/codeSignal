
_Avoid using C++'s  `std::next_permutation`  or similar features in other languages to solve this challenge. Implement the algorithm yourself, since this is what you would be asked to do during a real interview._

Given a string  `s`, find all its potential permutations. The output should be sorted in  lexicographical order.

Example

-   For  `s = "CBA"`, the output should be  
    `stringPermutations(s) = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]`;
-   For  `s = "ABA"`, the output should be  
    `stringPermutations(s) = ["AAB", "ABA", "BAA"]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string s**
    
    A string containing only capital letters.
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 5`.
    
-   **[output] array.string**
    
    -   All permutations of  `s`, sorted in lexicographical order.
