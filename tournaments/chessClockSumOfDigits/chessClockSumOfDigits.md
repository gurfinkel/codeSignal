
Consider a digital chess clock, which shows the time in the format  `"m.ss"`  on each of the two displays.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/chessClockSumOfDigits/img/chess_clock.png?_tm=1530791320148)

Here is how the chess clock works: At any given moment, only one side of the clock is active, meaning that the time on one of the displays goes backwards while the time on the other side remains the same. After a player makes a move, they press the button, and their side of the clock pauses while the time on their opponent's side starts going backwards.

Assume that the time initially displayed on the clock is precise, i.e. for the active display the time decreases by one second after exactly one second has elapsed. The first player's clock is active at the moment when we begin observing the game.

Note that the players can press the button at any moment - for example, at  `2.5`  seconds from the initial time. Assume that during the game, the button can be pressed an arbitrary number of times. When one of the displays shows  `"0:00"`, the game ends immediately.

Given  `initialTime`  for both sides of the clock and a positive integer  `k`, what are the maximum and the minimum sum of digits that can possibly appear on the clock within the next  `k + 0.5`  seconds?

Example

For  `initialTime = ["3.05", "9.02"]`  and  `k = 9`, the output should be  
`chessClockSumOfDigits(initialTime, k) = [12, 38]`.

The situation in which you can obtain the minimum sum is  `["3.00", "9.00"]`. For instance, the first player can spend  `5`  seconds on their move, after which the second player can think for  `2`  seconds (not necessarily pressing the button after that). After that, the clock will show  `["3.00", "9.00"]`. The sum of these digits is  `12`. During the remaining  `2.5`  seconds (out of  `k + 0.5`  that we are considering), the sum of the digits cannot become smaller, so  `12`  is the answer.

The situation in which you can obtain the maximum sum is  `["2.59", "8.59"]`. For instance, the first player (whose side of clock was initially active) can press the clock  `1.5`  second after the beginning (when the clock showed  `["3.04", "9.02"]`), then the second player can spend three seconds until pressing the button (after which the clock showed  `["3.04", "8.59"]`).  `4.5`  seconds later (during which the first player was thinking) the clock will show  `["2.59", "8:59"]`. Only  `0.5`  seconds remain out of the  `k + 0.5`  that we are considering, so the values on display cannot change any more. The sum of these digits is  `38`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string initialTime**
    
    The time on the clock for the first player, followed by the time on the clock for the second player.
    
    _Guaranteed constraints:_  
    `initialTime.length = 2`,  
    `initialTime[i].length = 4`,  
    `initialTime[i] ≠ "0.00"`,  
    `'0' ≤ initialTime[i][0] ≤ '9'`,  
    `initialTime[i][1] = '.'`,  
    `'0' ≤ initialTime[i][2] ≤ '5'`,  
    `'0' ≤ initialTime[i][3] ≤ '9'`.
    
-   **[input] integer k**
    
    _Guaranteed constraints:_  
    `0 ≤ k ≤ 1000`.
    
-   **[output] array.integer**
    
    -   An array of two integers in the format  `[<minimum sum value>, <maximum sum value>]`.