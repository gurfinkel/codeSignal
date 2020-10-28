def questionCorrectionBot(question):
    while question[0]==" ":
        question = question[1:]

    while question[-1]==" ":
        question = question[:-1]

    question = re.sub(r" +"," ",question)
    question = re.sub(r" *, *",", ",question)

    while question[len(question)-2]=="?":
        question = question[:-1]

    question = question[0].upper()+question[1:]

    if question[-1]!="?":
        question += "?"

    return question
