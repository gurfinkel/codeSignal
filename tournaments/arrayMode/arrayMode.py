def arrayMode(sequence):
    from collections import Counter

    r = [x for x, _ in Counter(sequence).most_common(1)]
    return r[0]
