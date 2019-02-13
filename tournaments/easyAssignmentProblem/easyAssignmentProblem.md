
You're the CEO of a small toy company, so small that the company only has  `2`  employees and  `2`  types of work:

-   manufacturing the toys (task number  `1`)
-   painting the toys (task number  `2`)

You're given a  `2 × 2`  matrix  `skills`, such that  `skills[i][j]`  shows the skill level of  `(i + 1)th`  employee in  `(j + 1)th`  task. So  `skills[0][0]`  is the skill level of the first employee in the first task,  `skills[1][0]`  is the skill level of the second employee in the first task, etc. Assume that output quality equals skill.

Your goal is to assign exactly one task to each employee in such a way that the quality of the result is maximized. It's guaranteed that the answer is unique.

Example

-   For  `skills = [[1, 3], [2, 3]]`, the output should be  
    `easyAssignmentProblem(skills) = [2, 1]`.  
    Since both employees have the same skills in the second task (`3`), but employee  `2`  is better at the first task, the correct assignment is to assign task  `1`  to employee  `2`  and task  `2`  to employee  `1`.
-   For  `skills = [[3, 1], [2, 1]]`, the output should be  
    `easyAssignmentProblem(skills) = [1, 2]`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer skills**
    
    A square matrix of size  `2 × 2`  with non-negative integers representing the skill levels of the two employees for the two task types.
    
    _Guaranteed constraints:_  
    `0 ≤ skills[i][j] ≤ 250`.
    
-   **[output] array.integer**
    
    -   Array of two integers representing the best task assignment (`1`-based).