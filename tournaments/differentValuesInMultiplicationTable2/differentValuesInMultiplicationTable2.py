def differentValuesInMultiplicationTable2(n, m):
    st = set()
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            st.add(i * j)
    return len(st)