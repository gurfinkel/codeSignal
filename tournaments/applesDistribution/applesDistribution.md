
There are some  `apples`  that you want to give out as a present. You are going to distribute them between some gift boxes in such a way that all the boxes will contain an equal number of apples. You can leave out some of the apples, but no more than  `maxResidue`. You also don't want to leave out more apples than necessary; that is, if each box contains  `x`  apples, the number of left out apples should be less than  `x`.

Assume that you have an infinite number of gift boxes, and that all of them have the capacity of  `boxCapacity`. In how many ways can you distribute the apples satisfying all of the above conditions?

Example

For  `apples = 7`,  `boxCapacity = 4`, and  `maxResidue = 1`, the output should be  
`applesDistribution(apples, boxCapacity, maxResidue) = 3`.

There are three ways to distribute the apples:

-   seven boxes, one apple into each box, no apples left out;
-   three boxes, two apples into each box, one apple left out;
-   two boxes, three apples into each box, one apple left out.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer apples**
    
    The number of apples, a positive integer.
    
    _Guaranteed constraints:_  
    `4 ≤ apples ≤ 20`.
    
-   **[input] integer boxCapacity**
    
    The maximal number of apples that fit into each box, a non-negative integer.
    
    _Guaranteed constraints:_  
    `4 ≤ boxCapacity ≤ 10`.
    
-   **[input] integer maxResidue**
    
    The maximal number of apples that you are allowed to leave out, a non-negative integer.
    
    _Guaranteed constraints:_  
    `0 ≤ maxResidue ≤ 3`.
    
-   **[output] integer**
    
    -   The number of different distributions.