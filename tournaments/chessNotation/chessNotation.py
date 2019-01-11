def chessNotation(notation):
    board = [
        re.sub("\d", lambda m: "1" * int(m.group(0)), row)
        for row in notation.split("/")
    ]    
    rotated_board = [
        re.sub("1+", lambda m: str(len(m.group(0))), "".join(row))
        for row in zip(*board[::-1])
    ]
    
    return "/".join(rotated_board)