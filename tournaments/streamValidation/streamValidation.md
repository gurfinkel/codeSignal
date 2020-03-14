
A character in  [UTF-8](https://en.wikipedia.org/wiki/UTF-8)  can be anywhere from 1 to 4 bytes long. The bytes are 8 bits long and are subject to the following rules:

-   For a  `1`-byte character, the first bit is a  `0`, followed by its unicode code.
-   For an  `n`-byte character, the first  `n`  bits are all  `1`s and the  `n + 1`  bit is  `0`. This is followed by  `n - 1`  bytes in which the  `2`  most significant bits (that is, the leftmost  `2`) are  `10`.

This is how the UTF-8 encoding would work:

```
   Char. number range  |        UTF-8 octet sequence
      (hexadecimal)    |              (binary)
   --------------------+---------------------------------------------
   0000 0000-0000 007F | 0xxxxxxx
   0000 0080-0000 07FF | 110xxxxx 10xxxxxx
   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

```

Given an array of integers representing the data, return  `true`  if it can be converted to a valid UTF-8 encoding, otherwise return  `false`.

Example

-   For  `stream = [197, 130, 1]`, the output should be  
    `streamValidation(stream) = true`.
    
    The input stream, when converted from decimal to binary numbers, represents the following octet sequence:  `11000101 10000010 00000001`. The first  `2`  bits are  `1`s and the  `3rd`  bit is  `0`, meaning that this sequence is a valid UTF-8 encoding of a  `2`-byte character followed by a  `1`-byte character, making the answer  `true`.
    
-   For  `stream = [235, 140, 4]`, the output should be  
    `streamValidation(stream) = false`.
    
    The input stream, when converted from decimal to binary numbers, represents the following octet sequence:  `11101011 10001100 00000100`. The first  `3`  bits are all  `1`s and the  `4th`  bit is  `0`, meaning that this is a  `3`-byte character. The next byte is a correct continuation byte since it starts with  `10`. However, the second continuation byte is invalid because it does not start with  `10`, making the answer  `false`.
    

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.integer stream**
    
    An array of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ stream.length ≤ 1100`,  
    `0 ≤ stream[i] ≤ 255`.
    
-   **[output] boolean**
    
    -   Return  `true`  if the input array represents a valid UTF-8 encoding, otherwise return  `false`.
