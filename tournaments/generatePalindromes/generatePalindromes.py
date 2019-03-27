def generatePalindromes(charactersSet):

    result = []

    N = len(charactersSet)
    palindrome = [0] * N
    letterCnt = [0] * 26

    for i in range(N):
        letterCnt[ord(charactersSet[i]) - ord('a')] += 1
    if N % 2 == 1:
        for i in range(26):
            if letterCnt[i] % 2 == 1:
                letterCnt[i] -= 1
                palindrome[N // 2] = chr(ord('a') + i)
                break

    def generate(idx):
        if idx >= N // 2:
            result.append(''.join(palindrome))
            return
        for i in range(26):
            if letterCnt[i] >= 2:
                letterCnt[i] -= 2
                palindrome[idx] = chr(ord('a') + i)
                palindrome[N - idx - 1] = chr(ord('a') + i)
                generate(idx + 1)
                letterCnt[i] += 2

    generate(0)
    return result
