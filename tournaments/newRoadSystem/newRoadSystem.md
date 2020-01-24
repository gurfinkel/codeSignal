
Once upon a time, in a kingdom far, far away, there lived a King Byteasar I. As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant. One cold evening a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws! In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?

The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way). He personally prepared the  `roadRegister`  of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams, i.e. each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one who he has decreed must check his calculations.

Example

-   For
    
    ```
    roadRegister = [[false, true,  false, false],
                    [false, false, true,  false],
                    [true,  false, false, true ],
                    [false, false, true,  false]]
    
    ```
    
    the output should be  
    `newRoadSystem(roadRegister) = true`.
    
    The cities will be connected as follows:  
    ![](https://codesignal.s3.amazonaws.com/tasks/newRoadSystem/img/example1.jpg?_tm=1551538444895)
    
    Cities  `0`,  `1`  and  `3`  (0-based) have one incoming and one outgoing road, and city  `2`  has two incoming and two outgoing roads. Thus, the output should be  `true`.
    
-   For
    
    ```
    roadRegister = [[false, true,  false, false, false, false, false],
                    [true,  false, false, false, false, false, false],
                    [false, false, false, true,  false, false, false],
                    [false, false, true,  false, false, false, false],
                    [false, false, false, false, false, false, true ],
                    [false, false, false, false, true,  false, false],
                    [false, false, false, false, false, true,  false]]
    
    ```
    
    the output should be  
    `newRoadSystem(roadRegister) = true`.
    
    The cities will be connected as follows:  
    ![](https://codesignal.s3.amazonaws.com/tasks/newRoadSystem/img/example2.jpg?_tm=1551538445104)
    
    Each city has one incoming and one outgoing road.
    
-   For
    
    ```
    roadRegister = [[false, true,  false],
                    [false, false, false],
                    [true,  false, false]]
    
    ```
    
    the output should be  
    `newRoadSystem(roadRegister) = false`.
    
    The cities will be connected as follows:  
    ![](https://codesignal.s3.amazonaws.com/tasks/newRoadSystem/img/example3.jpg?_tm=1551538445293)
    
    City  `1`  has one incoming and no outgoing roads, and city  `2`  has one outgoing and no incoming roads.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean roadRegister**
    
    Since cartography has not yet been properly developed in the kingdom, the registers are used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If  `roadRegister[i][j] = true`, then there is a road from the  `ith`  to the  `jth`  city; the road doesn't exist otherwise.
    
    It is guaranteed that there are no looping roads, i.e. roads that lead back to the same city it originated from.
    
    _Guaranteed constraints:_  
    `1 ≤ roadRegister.length ≤ 100`,  
    `roadRegister[0].length = roadRegister.length`,  
    `roadRegister[i][i] = false`.
    
-   **[output] boolean**
    
    -   `true`  if the new road system is good enough,  `false`  otherwise.