def sameElementsNaive(a, b):
    return len(a) + len(b) - len(set(a + b))