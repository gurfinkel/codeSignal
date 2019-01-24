
_Telephone_  is a game played around the world, in which one person whispers a message to another, this person whispers what she has heard to the next one, and so on, until the last player announces the message she got to the entire group. Errors typically accumulate during this process, so the phrase announced by the last player may differ significantly from the initial one.

You're given the array  `messages`  of message versions:  `message[0]`  is the statement the  `1st`person told the  `2nd`  one (i.e. it is the initial phrase),  `message[1]`  is the statement the  `2nd`  person told the  `3rd`  one, etc. The last element of  `message`corresponds to the phrase announced to the entire group by the last player.

Find the index (0-based) of the first player who failed to reproduce exactly what she should have heard or identify that nobody made a mistake.

Example

For

    messages = [
	    "CodeSignal rocks!", 
	    "CodeSignal rocks!", 
	    "CodeSignal folks!", 
	    "Code Signal folks!", 
	    "Code bites folks!"] 

the output should be  
`telephoneGame(messages) = 2`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string messages**
    
    Array of at least two non-empty strings.
    
    _Guaranteed constraints:_  
    `2 ≤ messages.length ≤ 10`,  
    `1 ≤ messages[i].length ≤ 60`.
    
-   **[output] integer**
    
    -   The index (0-based) of the first player who failed to reproduce exactly what she heard or  `-1`  if there is no such player.