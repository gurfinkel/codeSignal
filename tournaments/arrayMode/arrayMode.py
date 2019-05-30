def arrayMode(sequence):
    from collections import Counter

    store = [a for a, _ in Counter(sequence).most_common(1)]
    return store[0]
