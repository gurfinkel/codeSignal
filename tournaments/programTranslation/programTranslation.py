def programTranslation(solution, args):
    argumentVariants = '|'.join(args)
    pattern = "(?<=[^0-9a-zA-Z$_])("+argumentVariants+")(?=[^0-9a-zA-Z$_])"
    repl = r"$\1"
    return re.sub(pattern, repl, solution)
