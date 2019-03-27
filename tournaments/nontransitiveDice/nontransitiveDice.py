def nontransitiveDice(dice):
    S = numpy.sign
    return abs(sum(S(sum(S(a-b) for a in dice[i-1] for b in dice[i])) for i in [0,1,2]))//2
