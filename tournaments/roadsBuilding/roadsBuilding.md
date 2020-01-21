
Once upon a time, in a kingdom far, far away, there lived a King Byteasar II. There was nothing special about him or his kingdom. As a mediocre ruler, he preferred hunting and feasting over doing anything about his kingdom's prosperity.

Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night. However, since there was no one to advise him, he completely forgot about one important thing: the roads! Over the years most of the two-way roads built by Byteasar's predecessors were forgotten and no longer traversable. Only a few  `roads`  can still be used.

Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads are missing. Desperate, he turned to his magic crystal ball for help. The crystal showed him a programmer from the distant future: you! Now you're the only one who can save the kingdom. Given the existing  `roads`  and the number of  `cities`  in the kingdom, you should use the most modern technologies and find out which roads should be built again to connect each pair of cities. Since the crystal ball is quite old and meticulous, it will only transfer the information if it is sorted properly.

The roads to be built should be returned in an array sorted  lexicographically, with each road stored as  `[_cityi_,  _cityj_]`, where  `_cityi_  <  _cityj_`.

Example

For  `cities = 4`  and  `roads = [[0, 1], [1, 2], [2, 0]]`,  
the output should be  
`roadsBuilding(cities, roads) = [[0, 3], [1, 3], [2, 3]]`.

See the image below: the existing roads are colored black, and the ones to be built are colored red.  
![](https://codesignal.s3.amazonaws.com/tasks/roadsBuilding/img/example.jpg?_tm=1551538698266)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] integer cities**
    
    The number of cities in the kingdom.
    
    _Guaranteed constraints:_  
    `1 ≤ cities ≤ 100`.
    
-   **[input] array.array.integer roads**
    
    Array of roads in the kingdom. Each road is given as a pair  `[_cityi_,  _cityj_]`, where  `0 ≤  _cityi_,  _cityj_  < cities`  and  `_cityi_  ≠  _cityj_`. It is guaranteed that no road is given twice.
    
    _Guaranteed constraints:_  
    `0 ≤ roads.length ≤ 5000`,  
    `roads[i].length = 2`,  
    `0 ≤ roads[i][j] < cities`.
    
-   **[output] array.array.integer**
    
    -   A unique array of roads that should be built sorted as described above. There's no need to build looping roads, i.e. roads that lead back from a city to itself.
