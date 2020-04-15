
You're a crossword fanatic, and have finally decided to try and create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:

-   the crossword must contain exactly four words;
-   these four words should form four pairwise intersections;
-   all words must be written either left-to-right or top-to-bottom;
-   the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.

Given  `4`  words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.

Example

For  `words = ["crossword", "square", "formation", "something"]`, the output should be  
`crosswordFormation(words) = 6`.

The six crosswords can be formed as shown below:

```
  f                         f                             f
  o                     c r o s s w o r d     c r o s s w o r d
c r o s s w o r d           r   o                   q     r
  m   q                     m   m                   u     m
  a   u            ;  s q u a r e          ;        a     a
  t   a                     t   t                   r     t
  i   r                     i   h             s o m e t h i n g
s o m e t h i n g           o   i                         o
  n                         n   n                         n
                                g                               
                                                              
    c         s               s                                      
f o r m a t i o n       c     q               c         s          
    o         m         r     u               r         o      
    s q u a r e       f o r m a t i o n       o         m            
    s         t    ;    s     r            ;  s q u a r e                  
    w         h         s o m e t h i n g     s         t         
    o         i         w                     w         h     
    r         n         o                   f o r m a t i o n            
    d         g         r                     r         n         
                        d                     d         g             

```

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string words**
    
    An array of distinct strings, the words you need to use in your crossword.
    
    _Guaranteed constraints:_  
    `words.length = 4`,  
    `3 ≤ words[i].length < 15`.
    
-   **[output] integer**
    
    -   The number of ways to make a correct crossword of the desired formation.