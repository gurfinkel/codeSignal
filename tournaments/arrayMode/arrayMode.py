from collections import Counter

def arrayMode(sequence):
    r = [x for x, _ in Counter(sequence).most_common(1)]
    return r[0]
