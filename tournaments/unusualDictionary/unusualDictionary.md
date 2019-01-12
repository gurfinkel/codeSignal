
You are working on a brand new dictionary. Instead of adding weird contractions for various parts of speech (like  _v_,  _n_,  _adj_,  _adv_, etc.), you decided to provide far more useful information: you put an article before each noun (you haven't chosen between definite and indefinite articles yet, so you use  `a`,  `an`  or  `the`),  `to`  before each verb, and write all other words as is. This is a dictionary, so the words are still supposed to go in alphabetical order disregarding supplementary words. For example, what was  _cat (n), hiss (v), kitten (n), meow (v), playful (adj), purr (v)_, now may become  _the cat, to hiss, a kitten, to meow, playful, to purr_. If a list contains two words which belong to different parts of speech but are written in the same way, include supplementary words into comparison, i.e.  _to desert_  should be preceded by  _the desert_, and  _to upset_  should go before  _upset_.

You're afraid that people will not understand your groundbreaking approach. To make sure that your time is not wasted, you decide first to apply your method only to a short list of words, show it to your friends and see how it goes. Before showing the list to friends, you would like to make sure that you didn't mess up the order. Given a list of words  `wordList`  (some of which are preceded by supplementary parts), check if they are sorted  lexicographically  according to the above-described rules.

Example

-   For  `wordList = ["the cat", "to hiss", "a kitten", "to meow", "playful", "to purr"]`, the output should be  
    `unusualDictionary(wordList) = true`;
    
-   For  `wordList = ["to desert", "the desert", "a dessert"]`, the output should be  
    `unusualDictionary(wordList) = false`.
    
    The correct order is  _the desert, to desert, a dessert_: the first two words should be compared together with supplementary words (so they differ at the second position where  `h`  precedes  `o`), while the last two words should be compared without supplementary words (so they differ at the fourth position where  `e`  precedes  `s`).
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.string wordList**
    
    Array of words. Each element of the array either consists only of lowercase English letters or is formed by a supplementary word (`"a"`,  `"an"`,  `"the"`,  `"to"`) followed by a single whitespace, followed by a word consisting of only lowercase English letters.
    
    Please, note that the given list is  **not**  guaranteed to contain valid English words.
    
    _Guaranteed constraints:_  
    `1 ≤ wordList.length ≤ 100`,  
    `1 ≤ wordList[i].length ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if the sorting is correct, and  `false`otherwise.