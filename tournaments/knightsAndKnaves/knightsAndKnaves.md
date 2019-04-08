
There is an island where all inhabitants are either knights, who always tell the truth, or knaves, who always lie. Once a visitor came to the island and met a group of its inhabitants. He asked everyone to tell about each person in a group whether he was a knight or a knave, and wrote down the answers. But now he is not sure if his notes are correct, so your task is to check if there is a combination of knights and knaves that would have given the same answers the visitor got.

Example

-   For  `answers = [5, 2, 5]`, the output should be  
    `knightsAndKnaves(answers) = true`.
    
    It is possible that the  `1st`  and the  `3rd`inhabitants are knights, while the  `2nd`  is a knave, so their answers are  `101`,  `010`  and  `101`.
    
-   For  `answers = [0]`, the output should be  
    `knightsAndKnaves(answers) = false`.
    
    Both knight and knave would have called themselves a knight.
    
-   For  `answers = [3, 3]`, the output should be  
    `knightsAndKnaves(answers) = true`.
    
    There can be either two knights or two knaves in the group.
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer answers**
    
    `answers`  is an array of  `n`  integers, where  `n`is the number of inhabitants in the group. For each  `i`  `answers[i]`  is a bitmask of exactly  `n`  bits, representing the answers of the  `(i + 1)th`  inhabitant (1-based). Its least significant (i.e. the rightmost) bit refers to the answer about the  `1st`  inhabitant, the second rightmost bit contains the answer about the  `2nd`  inhabitant, etc. Each bit in the  `ith`  bitmask is either  `1`, if the  `(i + 1)th`  inhabitant said that the corresponding inhabitant is a knight, or  `0`  otherwise.
    
    _Guaranteed constraints:_  
    `1 ≤ answers.length ≤ 4`,  
    `0 ≤ answers[i] ≤ 15`.
    
-   **[output] boolean**
    
    -   `true`  if the notes are correct,  `false`otherwise.