def nthNumber(s, n):
    pattern = "[^1-9]*[1-9]\d*[^1-9]*"*(n-1)+"[^1-9]*([1-9]\d*)[^1-9]*"
    return re.match(pattern, s).group(1)
