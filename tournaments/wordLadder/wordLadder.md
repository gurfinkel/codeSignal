
Given two words,  `beginWord`  and  `endWord`, and a  `wordList`  of approved words, find the length of the shortest transformation sequence from  `beginWord`  to  `endWord`  such that:

-   Only one letter can be changed at a time
-   Each transformed word must exist in the  `wordList`.

Return the length of the shortest transformation sequence, or  `0`  if no such transformation sequence exists.

_Note:  `beginWord`  does not count as a transformed word. You can assume that  `beginWord`  and  `endWord`  are not empty and are not the same._

Example

For  `beginWord = "hit"`,  `endWord = "cog"`, and  `wordList = ["hot", "dot", "dog", "lot", "log", "cog"]`, the output should be  
`wordLadder(beginWord, endWord, wordList) = 5`.

The shortest transformation is  `"hit" -> "hot" -> "dot" -> "dog" -> "cog"`  with a length of  `5`.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] string beginWord**
    
    _Guaranteed constraints:_  
    `1 ≤ beginWord.length ≤ 5`.
    
-   **[input] string endWord**
    
    _Guaranteed constraints:_  
    `endWord.length = beginWord.length`.
    
-   **[input] array.string wordList**
    
    An array containing all of the approved words. All words in the array are the same length and contain only lowercase English letters. You can assume that there are no duplicates in  `wordList`.
    
    _Guaranteed constraints:_  
    `2 ≤ wordList.length ≤ 600`,  
    `wordList[i].length = beginWord.length`.
    
-   **[output] integer**
    
    -   An integer representing the length of the shortest transformation sequence from  `beginWord`  to  `endWord`  using only words from  `wordList`  as described above.
