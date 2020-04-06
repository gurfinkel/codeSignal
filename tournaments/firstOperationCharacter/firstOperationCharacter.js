function firstOperationCharacter(expr) {
    L = l = p = i = 0

    for (c of expr) {
        l += c == '('
        l -= c == ')'

        c > ')' && l > L | l == L & c < expr[p] && (
            p = i,
                L = l
        )

        i++
    }

    return p
}
