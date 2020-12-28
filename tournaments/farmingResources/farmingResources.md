
You decide to send your troops to the  _Logging Camp_  to gather some lumber. Like any good Commander, you first need to make sure that your enemy's troops (which are heading to the same  _Logging Camp_) won't get there first.

The world map can be represented as an infinite grid of hexagonal cells (a  _Hex Map_). Each cell is uniquely defined by its coordinates as shown below:

![](https://codesignal.s3.amazonaws.com/tasks/farmingResources/img/coordinates.png?_tm=1582018589586)

Your troops, your enemy's troops and the  _Logging Camp_  each occupies exactly one cell.

There are  `2`  types of cells, those that are passable and those that are impassable. Troops can move from one passable cell to another if they share a common side. Such a move takes  `k`  seconds where  `k`  represents the size of the troops.

Both you and your enemy are so eager to get to the  _Logging Camp_  that you ignore each other's troop movements. In other words, you can both safely occupy the same cell at the same time (including the initial cell).

Given the locations of the troops and the  _Logging Camp_, find out if your troops can reach their destination earlier than your enemy.

Example

-   For  `friendlyTroops = [-2, 2, 3]`,  `enemyTroops = [1, 0, 9]`,  `loggingCamp = [0, 0]`, and  `impassableCells = [[-1, 1]]`, the output should be  
    `farmingResources(friendlyTroops, enemyTroops, loggingCamp, impassableCells) = false`.

    Your troops need  `3 * 3 = 9`  seconds to reach the  _Logging Camp_  (one of the optimal paths is  `(-2, 2) -> (-2, 1) -> (-1, 0) -> (0, 0)`, i.e.  `3`  marches taking  `3`  seconds each). Your enemy's troops will arrive in  `9 * 1 = 9`  (`1`  march taking  `9`  seconds) seconds as well.

    ![](https://codesignal.s3.amazonaws.com/tasks/farmingResources/img/example1.png?_tm=1582018589887)

-   For  `friendlyTroops = [-2, 2, 3]`,  `enemyTroops = [1, 0, 9]`,  `loggingCamp = [0, 0]`, and  `impassableCells = []`, the output should be  
    `farmingResources(friendlyTroops, enemyTroops, loggingCamp, impassableCells) = true`.

    Your troops need  `3 * 2 = 6`  seconds to reach the  _Logging Camp_  (the optimal paths is  `(-2, 2) -> (-1, 1) -> (0, 0)`, i.e.  `2`  marches taking  `3`  seconds each). Your enemy's troops will arrive in only  `9`  seconds.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.integer friendlyTroops**

    Array of three integers: the first two values represent the location of your troops; the third, its size (a positive integer).

    _Guaranteed constraints:_  
    `friendlyTroops.length = 3`,  
    `-20 < friendlyTroops[0], friendlyTroops[1] < 20`,  
    `1 ≤ friendlyTroops[2] < 20`.

-   **[input] array.integer enemyTroops**

    Array of three integers: the first two values represent the location of your enemy's troops; the third, its size (a positive integer).

    _Guaranteed constraints:_  
    `enemyTroops.length = 3`,  
    `-20 < enemyTroops[0], enemyTroops[1] < 20`,  
    `1 ≤ enemyTroops[2] < 20`.

-   **[input] array.integer loggingCamp**

    Array of two integers representing the location of the  _Logging Camp_. It's guaranteed that neither your troops nor your enemy's troops are initially in the  _Logging Camp_  cell.

    _Guaranteed constraints:_  
    `loggingCamp.length = 2`,  
    `-20 < loggingCamp[i] < 20`.

-   **[input] array.array.integer impassableCells**

    Each element of  `impassableCells`  is an array of two integers describing the coordinates of an impassable cell. It's guaranteed that for both your troops and your enemy troops it's possible to reach the  _Logging Camp_.

    _Guaranteed constraints:_  
    `0 ≤ impassableCells.length ≤ 40`,  
    `impassableCells[i].length = 2`,  
    `-20 < impassableCells[i][j] < 20`.

-   **[output] boolean**

    `true`  if your troops can get to the  _Logging Camp_  before your enemy,  `false`  otherwise.