def squaresUnderQueenAttack(n, queens, queries):
    arr_res = []
    set_x = set()
    set_y = set()
    set_diag1 = set()
    set_diag2 = set()
    for qu in queens:
        set_x.add(qu[0])
        set_y.add(qu[1])
        set_diag1.add(qu[0] + qu[1])
        set_diag2.add(qu[0] - qu[1])


    for q in queries:
        if (q[0] in set_x or
            q[1] in set_y or
            (q[0] + q[1] ) in set_diag1 or
            (q[0] - q[1]) in set_diag2):
            arr_res.append(True)
        else:
            arr_res.append(False)

    return arr_res
