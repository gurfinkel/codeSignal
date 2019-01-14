def quadraticEquation(a, b, c):
    d = (b ** 2) - (4 * a * c)
    if d < 0:
        return []
    return sorted(set([(-b - math.sqrt(d)) / (2 * a), (-b + math.sqrt(d)) / (2 * a)]))
