
In one city it is allowed to write words on the buildings walls. The local janitor, however, doesn't approve of it at all. Every night he vandalizes the writings by erasing all occurrences of some letter. Since the janitor is quite lazy, he wants to do this with just one swipe of his mop.

Given a word, find the minimum width of the mop required to erase each of the letters.

Example

For  `word = "abacaba"`, the output should be
`theJanitor(word) = [7, 5, 1, 0, 0, ..., 0, 0]`  (`26`  elements altogether).

Input/Output

-   **[execution time limit] 3 seconds (cs)**

-   **[input] string word**

    A word consisting of only lowercase English letters.

    _Guaranteed constraints:_
    `5 ≤ word.length ≤ 50`.

-   **[output] array.integer**

    -   An array of length  `26`. The first element is the minimum width of the mop to erase letter  `'a'`, the second - letter  `'b'`  etc.