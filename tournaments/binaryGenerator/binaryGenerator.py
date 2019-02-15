def binaryGenerator(s):
    a = [ord(c)-ord('0') for c in s]
    b = []
    for i in range(len(a)):
        if a[i] == 0:
            b.append(i)
    cc = []
    for i in range(0,(1<<len(b))):
        for j in range(len(b)):
            a[b[j]] = (i>>j) & 1
        cc.append(''.join(chr(ord('0')+c) for c in a))
    cc.sort()
    return cc
