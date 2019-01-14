def isEarlier(time1, time2):
    if time1[0] * 60 + time1[1] < time2[0] * 60 + time2[1]:
        return True
    
    return False
