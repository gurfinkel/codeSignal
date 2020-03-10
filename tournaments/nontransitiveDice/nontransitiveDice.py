def nontransitiveDice(dice):
    q=[0,0,0]
    def k(r,s):
        t = 0
        for i in range(6):
            for j in range(6):
                if dice[r][i]>dice[s][j]:t+=1
                if dice[r][i]<dice[s][j]:t-=1
        if t>0:q[r]+=1
        if 0>t:q[s]+=1
    k(0,1)
    k(1,2)
    k(2,0)
    return q.count(1) > 1
