def firstMultiple(divisors, start):
    
    answer = start 
    while True:
        correct = True
        for i in range(len(divisors)):
            if answer % divisors[i] != 0:
                correct = False
                break
        if correct:
            return answer
        answer += 1
