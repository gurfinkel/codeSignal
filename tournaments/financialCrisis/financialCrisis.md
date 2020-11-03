
Once upon a time, in a kingdom far, far away, there lived a King Byteasar IV. His kingdom in the middle of a financial crisis, Byteasar was struggling to keep the economy out of a recession. Unfortunately there was not much he could do, and after much agonizing he came to the only solution: one of his cities had to be demolished, since keeping communication active between all the cities is way too expensive.

It is not yet known if Byteasar chose a city to destroy after careful planning or picked one at random. As a person with a PhD in History and Nobel prize in Computer Science, you can solve this mystery! Archaeologists have recently found a manuscript with information about the roads between the cities, that is now stored in the  `roadRegister`  matrix. You want to try and remove each city one by one and compare the road registers obtained this way. Thus you'll be able to compare the obtained roads and determine whether the one picked by Byteasar was the best by some criteria.

Given the  `roadRegister`, return an array of all the road registers obtained after removing each of the cities one by one.

Example

For

```
roadRegister = [[false, true,  true,  false],
                [true,  false, true,  false],
                [true,  true,  false, true ],
                [false, false, true,  false]]

```

the output should be

```
financialCrisis(roadRegister) = [
  [[false, true,  false],
   [true,  false, true ],
   [false, true,  false]],
  [[false, true,  false],
   [true,  false, true ],
   [false, true,  false]],
  [[false, true,  false],
   [true,  false, false],
   [false, false, false]],
  [[false, true,  true ],
   [true,  false, true ],
   [true,  true,  false]]
]

```

Here's the city connection that the given catalog represents:  
![](https://codesignal.s3.amazonaws.com/tasks/financialCrisis/img/initial.jpg?_tm=1582019604961)

And here's how the cities are connected with one of the cities destroyed (cities  `0`  -  `3`, respectively):  
![](https://codesignal.s3.amazonaws.com/tasks/financialCrisis/img/deck.jpg?_tm=1582019605278)

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.array.boolean roadRegister**
    
    Since cartography was not properly developed in the kingdom, the registers were used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If  `roadRegister[i][j] = true`, then there is a road between the  `ith`  and the  `jth`  cities; the road doesn't exist otherwise.
    
    It is guaranteed that there are no looping roads, i.e. roads that lead back to the same city it originated from.
    
    _Guaranteed constraints:_  
    `1 ≤ roadRegister.length ≤ 10`,  
    `roadRegister[0].length = roadRegister.length`,  
    `roadRegister[i][j] = roadRegister[j][i], i ≠ j`,  
    `roadRegister[i][i] = false`.
    
-   **[output] array.array.array.boolean**
    
    Array of the size  `roadRegister.length`, with each of its elements of size  `(roadRegister.length - 1) × (roadRegister.length - 1)`. The  `ith`  element of the resulting array should contain the road register of the kingdom with the  `ith`  city removed.
