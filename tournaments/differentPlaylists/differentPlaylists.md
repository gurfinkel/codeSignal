Sam likes to listen to music while he travels. His MP3 player contains  `n`  songs and he wants to listen to  `l`  songs during a trip. He likes hearing songs again, so these  `l`  songs don't necessarily have to be different. He has created a playlist such that a song can be played again only if at least  `k`  other songs have already been played.

Sam wants to know how many different playlists he could possibly create. Can you help Sam determine this number? As this number can be very large, return the number modulo  `10^9  + 7`.

Example

For  `n = 5`,  `k = 3`, and  `l = 6`, the output should be  
`differentPlaylists(n, k, l) = 480`.

-   The first song can be any of the  `5`.
-   The second song can be any except the first song played, so the number of variants for second song is  `4`.
-   The third song can be any except the first and the second played, so the number of variants for it is  `3`.
-   The fourth song can be any except the first three played, so the number of variants for it is  `2`.
-   The fifth song can be equal to the song that was played first, because  `3`  other songs have now been played. But it can't be equal to the second to the fourth songs, so the number of variants is  `2`.
-   For the sixth song we can choose from the first two songs played, but it can't be one of the third to the fifth songs, so again the number of variants is  `2`.

Thus, the answer is  `5 * 4 * 3 * 2 * 2 * 2 = 480`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    The number of available songs.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ 10^9`.
    
-   **[input] integer k**
    
    The number of songs that must play before the playlist can start repeating songs.
    
    _Guaranteed constraints:_  
    `1 ≤ k ≤ 10^5`.
    
-   **[input] integer l**
    
    The number of songs Sam wants to listen to during his trip.
    
    _Guaranteed constraints:_  
    `1 ≤ l ≤ 10^9`.
    
-   **[output] integer**
    
    -   The number of playlists that can be created, modulo  `10^9  + 7`