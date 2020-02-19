
You're a coder - you know how important it is to have a closing parenthesis for every opening parenthesis! Given  `n`  pairs of parentheses, write a function that generates all of the possible combinations of  regular parentheses, sorted in  [lexicographical order](https://app.codesignal.com/tournaments/XxXdLz6AyWyAiqaSS/D/lexicographical-order-for-strings).

Example

For  `n = 4`, the output should be

```
generateParentheses(n) = 
[
  "(((())))", "((()()))",
  "((())())", "((()))()", 
  "(()(()))", "(()()())", 
  "(()())()", "(())(())", 
  "(())()()", "()((()))", 
  "()(()())", "()(())()", 
  "()()(())", "()()()()"
]

```

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    A number representing the pairs of parentheses. A pair is considered to be an opening parenthesis  `(`  and a closing parenthesis  `)`.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 8`.
    
-   **[output] array.string**
    
    -   An array containing strings representing all possible combinations of well-formed parentheses.