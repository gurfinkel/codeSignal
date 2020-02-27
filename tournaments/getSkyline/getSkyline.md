
The city ordinance in BoxCity requires that all buildings be rectangles that lie flat along the ground. All the information about a particular building is contained in  `3`  numbers:

-   `left`: the  `x`  coordinate of the left side of the building,
-   `width`: the  `width`  of the building,
-   `height`: the  `height`  of the building.

The image below shows a building with  `(left, width, height) = (2,3,6)`.  
![Building](https://codesignal.s3.amazonaws.com/tasks/getSkyline/img/singleBuilding.png?_tm=1582023678084)

The  **skyline**  is a list of adjacent rectangular strips, and represents the collective outline of all the buildings in BoxCity.

Each strip is represented as  `(left, height)`  as defined above. We don't need the  `width`  of the strip, as this is determined by the left side of the next strip. At the right edge of the city, there will be an infinitely small strip  `(x, 0)`. Strips should be the minimum height possible.

Given the list of buildings  `buildings`, where each building is represented by an array of three elements  `[left, width, height]`, return the skyline as a list of strips, where each strip is represented by an array of two elements  `[left, height]`.

Example

-   For  `buildings = [[2, 3, 6]]`, the output should be  
    `getSkyline(buildings) = [[2, 6], [5, 0]]`.
    
    ![Example 1](https://codesignal.s3.amazonaws.com/tasks/getSkyline/img/example1.png?_tm=1582023678488)
    
-   For  `buildings = [[2, 3, 6], [3, 4, 6]]`, the output should be  
    `getSkyline(buildings) = [[2, 6], [7, 0]]`.
    
    ![Example 2](https://codesignal.s3.amazonaws.com/tasks/getSkyline/img/example2.png?_tm=1582023678772)
    
-   For  `buildings = [[1, 4, 4], [2, 5, 3], [3, 3, 6], [5.5, 3, 5], [10, 2, 2], [11, 2, 3]]`, the output should be  
    `getSkyline(buildings) = [[1, 4], [3, 6], [6, 5], [8.5, 0], [10, 2], [11, 3], [13, 0]]`.
    
    ![Example 3](https://codesignal.s3.amazonaws.com/tasks/getSkyline/img/example3.png?_tm=1582023679022)
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.float buildings**
    
    An array of buildings, sorted in ascending order by their  `x`  coordinate.
    
    _Guaranteed constraints:_  
    `1 ≤ buildings.length ≤ 105`,  
    `buildings[i].length = 3`,  
    `0 ≤ buildings[i][0] ≤ 106`,  
    `1 ≤ buildings[i][1] ≤ 106`,  
    `1 ≤ buildings[i][2] ≤ 106`,  
    `buildings[i][0] < buildings[i + 1][0]`.
    
-   **[output] array.array.float**
    
    -   The skyline represented as a list of strips, where each strip is represented by an array of two elements  `[left, height]`.