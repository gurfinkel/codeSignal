
In a kingdom far, far away, there lives a King Byteasar IX. The history of the kingdom is rich with events and conflicts, most of which is focused on its cities. King Byteasar doesn't want to go down in history as a lame duck ruler, and especially doesn't want to have anything to do with the infamous cities of the kingdom.

Instead, king Byteasar wants to focus on the roads, which is why he issued a new decree: from now on, all roads are to be considered cities, and all cities are to be considered roads. Now his most grateful subjects must pack up their belongings and move out from the cities to the roads, and the cartographers are busy with building a new  `roadRegister`  of the kingdom. All roads of the kingdom are to be named for the cities they connect (i.e.  `[_city1_,  _city2_]`,  `_city1_  <  _city2_`), sorted  lexicographically  and enumerated starting from  `0`. A new road register for such a system needs to be created.

Your task is to help the cartographers build the new road register. Handle the challenge, and the glorious kingdom of Byteasar IX will never have to deal with its pesky cities ever again!

Example

For

```
roadRegister = [
  [false, true,  true,  false, false, false],
  [true,  false, false, true,  false, false],
  [true,  false, false, false, false, false],
  [false, true,  false, false, false, false],
  [false, false, false, false, false, true ],
  [false, false, false, false, true,  false]
]

```

the output should be

```
livingOnTheRoads(roadRegister) = [
  [false, true,  true,  false],
  [true,  false, false, false],
  [true,  false, false, false],
  [false, false, false, false]
]

```

Here's how the new register can be obtained:  
![](https://codesignal.s3.amazonaws.com/tasks/livingOnTheRoads/img/example.jpg?_tm=1582037233003)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean roadRegister**
    
    Since cartography has not yet been properly developed in the kingdom, the registers are used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If  `roadRegister[i][j] = true`, then there is a road between the  `ith`  and the  `jth`  cities; the road doesn't exist otherwise.
    
    It is guaranteed that there are no looping roads, i.e. roads that lead back to the same city it originated from.
    
    _Guaranteed constraints:_  
    `1 ≤ roadRegister.length ≤ 15`,  
    `roadRegister[0].length = roadRegister.length`,  
    `roadRegister[i][j] = roadRegister[j][i], i ≠ j`,  
    `roadRegister[i][i] = false`.
    
-   **[output] array.array.boolean**
    
    The  `roadRegister`  after all cities are turned into roads, and vice versa.
