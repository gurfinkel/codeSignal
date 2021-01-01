
Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.

The little bot has already successfully completed several challenges. Now he is facing a challenge in which he has to prove that he knows how to ride a horse and plan battles. Ratiorg is sitting on his digital horse in the top left corner of an  `n × m`  board. The horse can only make moves similar to those of a knight chess piece. Prior to any action, Ratiorg should define values  `a`  and  `b`  (`0 < a ≤ b`), which will specify the horse's moves: each move the horse will change one of its coordinates by  `a`, and the other one by  `b`.

Ratiorg needs to define such  `a`  and  `b`  that will let him end up in the bottom right corner. How many ways are there to do this?

**Example**

For  `n = 3`  and  `m = 3`, the output should be  
`horsebot(n, m) = 3`.

Ratiorg can define three pairs:  `(1, 1)`,  `(1, 2)`  and  `(2, 2)`. Here's how he can travel to the bottom right corner in each case:

![](https://codesignal.s3.amazonaws.com/tasks/horsebot/img/example.png?_tm=1582025543379)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] integer n**

    The height of the field.

    _Guaranteed constraints:_  
    `2 ≤ n ≤ 10`.

-   **[input] integer m**

    The width of the field.

    _Guaranteed constraints:_  
    `2 ≤ m ≤ 10`.

-   **[output] integer**

    The number of pairs  `(a, b)`  Ratiorg can define to get to the bottom right corner.