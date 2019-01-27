
You are looking for teammates for an oncoming intellectual game in which you will have to answer some questions.

It is known that each question belongs to one of the  `n`  categories. A team is called  _perfect_  if for each category there is at least one team member who knows it perfectly.

You don't know any category well enough, but you are going to build a perfect team. You consider several candidates, and you are aware of the categories each of them knows perfectly. There is no restriction on the team size, but smaller teams gain additional bonus points. Thus, you want to build a perfect team of minimal possible size. Find this size (and don't forget to count yourself!) or determine that it is impossible to form a perfect team from the candidates you have.

**Example**

For  
`n = 3`  and

    candidates = [
	    [0, 2], 
	    [1, 2], 
	    [0, 1], 
	    [0]
	] 

the output should be  
`perfectTeamOfMinimalSize(n, candidates) = 3`.

You can build a perfect team of size 3 in any of the following ways:

-   yourself, candidate number  `1`  (`1`-based) and candidate number  `2`;
-   yourself, candidate number  `1`  and candidate number  `3`;
-   yourself, candidate number  `2`  and candidate number  `3`;
-   yourself, candidate number  `2`  and candidate number  `4`;

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10`.
    
-   **[input] array.array.integer candidates**
    
    For each valid  `i`,  `candidates[i]`  is an array of different integers representing indices of the categories which the  `ith`  candidate knows perfectly.
    
    _Guaranteed constraints:_  
    `0 ≤ candidates.length ≤ 10`,  
    `0 ≤ candidates[i].length < n`,  
    `0 ≤ candidates[i][j] < n`.
    
-   **[output] integer**
    
    -   The minimal possible size of the perfect team or  `-1`  if you can't build it.