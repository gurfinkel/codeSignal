
While exploring the ruins of a golden lost city, you discovered an ancient manuscript containing series of strange symbols. Thanks to your profound knowledge of dead languages, you realized that the text was written in one of the dialects of Befunge-93. Looks like the prophecy was true: you are the one who can find the answer to the Ultimate Question of Life! Of course you brought your futuristic laptop with you, so now you just need a function that will run the encrypted message and make you the all-knowing human being.

Befunge-93 is a stack-based programming language, the programs for which are arranged in a two-dimensional  _torus_  grid. The program execution sequence starts at the top left corner and proceeds to the right until the first direction instruction is met (which can appear in the very first cell). The  _torus_  adjective means that the program never leaves the grid: when it encounters a border, it simply goes to the next command at the opposite side of the grid.

You need to write a function that will be able to execute the given Befunge-93  `program`. Unfortunately your laptop, futuristic that it is, can't handle more than  `105`  instructions and will probably catch on fire if you try to execute more, so the function should exit after  `105`  commands. The good news is, the prophesy said that the answer to the Ultimate Question of Life contains no more than  `100`  symbols, so the function should return the  `program`  output once it contains  `100`  symbols.

The dialect of Befunge-93 in the manuscript consists of the following commands:

-   direction instructions:
    -   `>`: start moving right
    -   `<`: start moving left
    -   `v`: start moving down
    -   `^`: start moving up
    -   `#`: bridge; skip next cell
-   conditional instructions:
    -   `_`: pop a  `value`; move right if  `value = 0`, left otherwise
    -   `|`: pop a  `value`; move down if  `value = 0`, up otherwise
-   math operators:
    -   `+`: addition; pop  `a`, pop  `b`, then push  `a + b`
    -   `-`: subtraction; pop  `a`, pop  `b`, then push  `b - a`
    -   `*`: multiplication; pop  `a`, pop  `b`, then push  `a * b`
    -   `/`: integer division; pop  `a`, pop  `b`, then push  `b / a`
    -   `%`: modulo operation; pop  `a`, pop  `b`, then push  `b % a`
-   logical operators:
    -   `!`: logical NOT; pop a  `value`, if the  `value = 0`, push  `1`, otherwise push  `0`
    -   `` ` ``: greater than; pop  `a`  and  `b`, then push  `1`  if  `b > a`, otherwise  `0`
-   stack instructions:
    -   `:`: duplicate value on top of the stack
    -   `\`: swap the top stack value with the second to the top
    -   `$`: pop value from the stack and discard it
-   output instructions:
    -   `.`: pop value and output it as an integer followed by a space
    -   `,`: pop value and output it as ASCII character
-   digits  `0-9`: push the encountered number on the stack
-   `"`: start string mode; push each character's ASCII value all the way up to the next  `"`
-   (whitespace character): empty instruction; does nothing
-   `@`: end program; the program output should be returned then

If the stack is empty and it is necessary to pop a value, no exception is raised; instead,  `0`  is produced.

Example

For

```
program = [
    "               v",
    "v  ,,,,,"Hello"<",
    ">48*,          v",
    ""!dlroW",,,,,,v>",
    "25*,@         > "
]

```

the output should be  `befunge93(program) = "Hello World!\n"`.

_Note, that in the tests tab you will see a  `\`  as an escape symbol before each  `"`_.

Here is how the program is executed:

-   the program starts executing at the top left corner, doing nothing according to the  command until it meets the  `v`  command, which makes the instructions direct it downward;
-   the  `<`  makes it go left;
-   the  `"`  starts the string mode;  `"Hello"`  is pushed backwards on the stack;
-   six  `,`  symbols produce the  `"Hello"`  word, emptying the stack;
-   since the  `v`  symbol is encountered, the third line starts executing;
-   `4`  and  `8`  are pushed on the stack; the  `*`  operator pops them, multiplies and puts the result (`4 * 8 = 32`) back on the stack;
-   the  `,`  operator produces the character with the ASCII value of  `32`, which is a whitespace character;
-   all the empty (`' '`) instructions are then executed, until the  `v`  command is encountered; then, the fourth line starts to execute;
-   the  `>`  command forces instructions to the right to execute; since there is a border to the right, the leftmost instruction in the fourth line is executed next;
-   another string  `"`  mode starts, which pushes  `"World!"`  backwards on the stack;
-   next, the  `,`  commands output the  `"World!"`  string;
-   the  `v`  command moves command execution to the next line;
-   the  `>`  command moves command execution to the very beginning of the fifth line;
-   `2 * 5 = 10`  is pushed on the stack, and produced as a character  `\n`;
-   finally,  `@`  finishes the program execution.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string program**
    
    Array of strings of an equal length, representing a correct program written in the Befunge-93 dialect. It is guaranteed that the program will not fail because of division by zero.
    
    _Guaranteed constraints:_  
    `1 ≤ program.length ≤ 20`,  
    `1 ≤ program[0].length ≤ 100`,  
    `program[i].length = program[0].length`.
    
-   **[output] string**
    
    -   The output of the  `program`  after
    
    -   the program hits the  `@`  command;
    -   the program executes  `105`  commands;
    -   the program output contains  `100`  symbols;  
        or whichever comes first.
