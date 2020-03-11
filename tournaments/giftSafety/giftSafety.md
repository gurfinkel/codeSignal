
It's still a few months until Christmas, but some children have already sent their letters to Santa Claus because they all know that the earlier the letter is sent, the more likely it is to be delivered in time. All Santa's correspondence is sorted and organized by Christmas elves, who are good workers but do like to play tricks on the children. Their latest prank goes something like this: they take the name of the present a child wants to receive, choose  **any three consecutive letters**  from within it and  _shuffle_  their order (note that a triple of letters is considered  _shuffled_  only if the position of at least one letter has changed - preserving the positions of all three letters isn't considered  _shuffling_).

Thus, rather than getting a pair of new  _skates_, the poor child may instead get some useless  _stakes_. However, elves don't always pay attention to how they're  _shuffling_  and can sometimes end up with the same word. For example, elves could take the word  `"doll"`, choose letters  `'o'`,  `'l'`  and  `'l'`  and  _shuffle_  them as follows: the  `'o'`  stays in the same position while the two  `'l'`s are swapped.

To guard against elf pranks, you've developed a mobile app that measures the safety of a gift request based on how likely it is to be misinterpreted by a  _shuffle_. Write a function that calculates the number of triples formed by consecutive letters that can stay the same after  _shuffling_.

Example

-   For  `gift = "doll"`, the output should be  
    `giftSafety(gift) = 1`;
-   For  `gift = "aaaaaaa"`, the output should be  
    `giftSafety(gift) = 5`;
-   For  `gift = "cat"`, the output should be  
    `giftSafety(gift) = 0`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string gift**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `2 ≤ gift.length ≤ 20`.
    
-   **[output] integer**