
Inspired by AD&D (Advanced Dungeons & Dragons), you decide to invent your own role playing game. You're going to play it with your two best friends, so it will be for three players only. A brand new game needs a distinctive feature, and here it goes: each player uses their own die (in other words, each die has its own series of six numbers written on its sides), and these three dice form a  _nontransitive_  set. A set of dice is  _nontransitive_  if it contains three dice,  `A`,  `B`, and  `C`, with the property that  `A`  beats  `B`  (it rolls higher than  `B`  more times than  `B`  rolls higher than  `A`), and  `B`beats  `C`, but it is  **not**  true that  `A`  beats  `C`.

In order to find the set of dice suitable for your game, you repeatedly generate random triplets of dice and then check if they are  _nontransitive_. Since it is too boring to check this manually each time, your goal is to implement a function that automates the process, i.e. for the given numbers on the sides of three dice, you should verify that this set of dice is  _nontransitive_.

Example

-   For  `dice = [[2, 2, 2, 5, 5, 5], [3, 3, 3, 3, 3, 6], [1, 4, 4, 4, 4, 4]]`,  
    the output should be  `nontransitiveDice(dice) = true`.
    
    The second die rolls higher than the first die in  `21`  situations out of  `36`  possible ones, i.e. it is stronger. The first die rolls higher than the third one in  `21`  cases out of  `36`possible ones, i.e. it is stronger as well. The third die beats the second die in  `25`  cases out of  `36`  possible ones. To sum up, the  `2nd`die beats the  `1st`  one, the  `1st`  die beats the  `3rd`  one, but it is  **not**  true that the  `2nd`die beats the  `3rd`  one. Therefore, the given set of dice is  _nontransitive_  by definition.
    
-   For  `dice = [[1, 2, 3, 4, 5, 6], [4, 4, 4, 4, 4, 4], [2, 2, 6, 6, 6, 6]]`,  
    the output should be  `nontransitiveDice(dice) = false`.
    
    -   `1st`  vs  `2nd`:  `12`  (`1st`  die rolls higher) -  `6`  (tie) -  `18`  (`2nd`  die rolls higher)
    -   `2nd`  vs  `3rd`:  `12 - 0 - 24`
    -   `1st`  vs  `3rd`:  `8 - 6 - 22`
-   For  `dice = [[1, 1, 1, 10, 10, 10], [4, 4, 4, 4, 4, 100], [5, 5, 5, 5, 5, 5]]`,  
    the output should be  `nontransitiveDice(dice) = true`.
    
    -   `1st`  vs  `2nd`:  `15 - 0 - 21`
    -   `2nd`  vs  `3rd`:  `6 - 0 - 30`
    -   `1st`  vs  `3rd`:  `18 - 0 - 18`  (this is a tie whereas if it was a transitive set of dice, the  `3rd`  die would beat the  `1st`  one because it beats the  `2nd`  one and the  `2nd`one beats the  `1st`  one)

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.array.integer dice**
    
    Description of the dice.  `dice[i]`  is a sorted array of integers corresponding to the numbers written on the sides of the  `(i + 1)th`  die.
    
    _Guaranteed constraints:_  
    `dice.length = 3`,  
    `dice[i].length = 6`,  
    `1 ≤ dice[i][j] ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if the given set of dice is  _nontransitive_,  `false`  otherwise.