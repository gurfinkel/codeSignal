
You intercept a note being passed between your classmates, and while trying to read it discover that it's encrypted. Since you're a fan of puzzles, you decide to crack the code. You know the following two details about the note:

-   Your classmates use a simple substitution cipher. It works as follows:
    -   Consider the  plaintext alphabet. Then take its permutation and call it a  _ciphertext alphabet_.
    -   Write down the  _ciphertext alphabet_  under the plaintext alphabet. Now the symbols that are located in the same column correspond to one another.
    -   Now look through the message symbol by symbol and change each one to its replacement from the  _ciphertext alphabet_.
-   The contents of the message are followed by a signature encrypted in the same way.

To be thorough, you make sure to iterate over all the ciphers satisfying the above-mentioned requirements. The most reasonable approach is to choose the one with  lexicographically smallest  _ciphertext alphabet_  out of them.

Given the  `contents`  of the message, a  `signature`  and an  `encryptedSignature`, what text will you end up with after applying the approach described above?

Example

For  `contents = "issomtoqmvjts"`,  `signature = "alice"`,  
and  `encryptedSignature = "james"`, the output should be  
`substitutionCipherDecryption(contents, signature, encryptedSignature) = "keepitprivate"`.

Here is what we know for sure thanks to  `signature`  and  `encryptedSignature`:

```
 plaintext alphabet: abcdefghijklmnopqrstuvwxyz
ciphertext alphabet: j*e*s***m**a**************

```

Now let's choose the lexicographically smallest ciphertext alphabet out of all the candidates:

```
 plaintext alphabet: abcdefghijklmnopqrstuvwxyz
ciphertext alphabet: jbecsdfgmhiaklnopqrtuvwxyz

```

You can see that  `'i'`  from the ciphertext corresponds to  `'k'`,  `'s'`  corresponds to  `'e'`, etc.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string contents**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ contents.length ≤ 100`.
    
-   **[input] string signature**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `1 ≤ signature.length ≤ 30`.
    
-   **[input] string encryptedSignature**
    
    A string of lowercase English letters.
    
    _Guaranteed constraints:_  
    `encryptedSignature.length = signature.length`.
    
-   **[output] string**