
It is a common tradition to play  _Hangman_  game during classes. Too bad it's difficult to do so if you and your friend sit far from each other. You, however, came up with a great idea.

First, you write down a word. After that your friend writes down distinct  `letters`  and passes the list with them to you.  
Now you look at the letters in his list one by one. If the current letter is present in your word, you erase all occurrences of this letter from it, otherwise you call it a  _miss_. If you erase the entire word before  `6`_misses_, then your friend wins. If you count  `6`_misses_  or run out of letters before the word is erased, you win.

Given the  `word`  you made and your friend's  `letters`, return  `true`  if he wins or  `false`otherwise.

Example

For  `word = "hello"`  and  `letters = "aenmrolhtg"`, the output should be  
`hangman(word, letters) = true`.

The stages of the game are:

1.  `'a'`  - 1st  miss;
2.  `'e'`  - correct letter (`_ e _ _ _`);
3.  `'n'`  - 2nd  miss;
4.  `'m'`  - 3rd  miss;
5.  `'r'`  - 4th  miss;
6.  `'o'`  - correct letter (`_ e _ _ o`);
7.  `'l'`  - correct letter (`_ e l l o`);
8.  `'h'`  - correct letter (`h e l l o`);

Other letters don't matter since the word is guessed already.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] string word**
    
    A non-empty word composed of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ word.length ≤ 15`.
    
-   **[input] string letters**
    
    A string of distinct lowercase English letters.
    
    _Guaranteed constraints:_  
    `5 ≤ letters.length ≤ 15`.
    
-   **[output] boolean**